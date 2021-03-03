import { useIsFocused } from '@react-navigation/native';
import * as Notifications from 'expo-notifications';
import { Body, Left, Right, Switch, Text, Toast } from "native-base";
import React, { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { OrderStatus, PRIMARY_COLOR, TOAST_FAIL_MESSAGE, TOAST_SUCCESS_MESSAGE } from "../../../constance/constance";
import { listenInComingOrder } from '../../../firebase/firebase-realtime';
import { AUTO_ACCEPT_ORDER } from '../../../redux/action-types/action';
import { getAcceptOrderToday, getPreparationOrderToday, setOrderStatus } from "../../../redux/actions/order-list";
import ErrorModal from "../../atoms/error-modal";
import NewOrderModal from "../../molecules/new-order-modal/new-order-modal";
import OrderUpcoming from "../../molecules/order-upcoming/order-upcoming";
import { styles } from "./styles";



const UpcomingTab = (props) => {

  const dispatch = useDispatch();

  const toDoOrderList = useSelector(state => state.orderList.filterToDoList);
  const doingList = useSelector(state => state.orderList.filterDoingList);
  const autoAcceptOrder = useSelector(state => state.behavior.autoAcceptOrder)
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [visible, setVisible] = useState(false);
  const [newOrder, setNewOrder] = useState({})
  const isFocused = useIsFocused();

  const loadOrderList = useCallback(async () => {
    setIsLoading(true);
    try {
      setError();
      await dispatch(getAcceptOrderToday());
      await dispatch(getPreparationOrderToday());
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  }, [dispatch, setError, setIsLoading])

  // React.useMemo(() => {
  //   dispatch(getOrderAfterUpdate(OrderStatus.PREPARATION));
  // }, [doingList])

  Notifications.addNotificationReceivedListener((notification) => {
    setNewOrder(notification.request.content.data.order);
    setVisible(true)
  });

  const handleRejectOrder = () => {
    dispatch(setOrderStatus(newOrder.id, OrderStatus.REJECTION));
    setVisible(false);

  }

  const handleUpdateStatus = useCallback(
    async (status, id) => {
      try {
        if (status === "to-do") {
          await dispatch(setOrderStatus(id, OrderStatus.PREPARATION));
        } else {
          await dispatch(setOrderStatus(id, OrderStatus.READINESS));
        }
        Toast.show({
          text: TOAST_SUCCESS_MESSAGE,
          buttonText: "OK",
          type: "success"
        })

      } catch (error) {
        Toast.show({
          text: TOAST_FAIL_MESSAGE,
          buttonText: "OK",
          type: "warning"
        })
      }
      // console.log("todo");
    }
  )

  console.log(autoAcceptOrder)
  const handleAcceptOrder = async () => {
    console.log('handle accept')
    await dispatch(setOrderStatus(newOrder.id, OrderStatus.ACCEPTANCE));
    setVisible(false)
    await dispatch(getAcceptOrderToday());
  }
  useEffect(() => {
    loadOrderList();
    (() => {
      listenInComingOrder('0440ef59-6c90-4630-8be4-553533e45591', (listOrder) => {
        Object.values(listOrder)
      })
    })();
  }, [dispatch, loadOrderList]);

  if (error) {
    return (
      <ErrorModal
        loadOrderList={() => loadOrderList()}
      />
    )
  }

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={PRIMARY_COLOR} />
      </View>
    )
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#e6d7ab' }}>
      {visible ? <NewOrderModal newOrder={newOrder} handleAcceptOrder={handleAcceptOrder} handleRejectOrder={handleRejectOrder} visible={visible} /> : null }
      <View style={styles.switch_view}>
        <Left></Left>
        <Body style={styles.switch_container}>
          <Switch style={styles.switch} onValueChange={(value) => {
            dispatch({
              type: AUTO_ACCEPT_ORDER,
              payload: { autoAcceptOrder: value }
            })
          }} value={autoAcceptOrder} />
          <Text style={styles.switch_text}>Tự động tiếp nhận đơn hàng mới</Text>
        </Body>
        <Right />
      </View>
      <View style={styles.order_view}>

        <OrderUpcoming handleUpdateStatus={handleUpdateStatus} orderList={toDoOrderList} status="to-do" />
        <OrderUpcoming handleUpdateStatus={handleUpdateStatus} orderList={doingList} status="doing" />
      </View>
    </View>
  );
};

export default UpcomingTab;
