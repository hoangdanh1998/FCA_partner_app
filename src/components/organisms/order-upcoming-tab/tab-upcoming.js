import { useIsFocused } from '@react-navigation/native';
import { Body, Left, Right, Switch, Text, Toast } from "native-base";
import React, { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { LIGHT_COLOR, OrderStatus, TOAST_FAIL_MESSAGE, TOAST_SUCCESS_MESSAGE } from "../../../constance/constance";
import { listenInComingOrder } from '../../../firebase/firebase-realtime';
import { AUTO_ACCEPT_ORDER } from '../../../redux/action-types/action';
import { getAcceptOrderToday, getPreparationOrderToday, getReadinessOrderToday, setOrderStatus, SET_LIST_INIT_ORDER } from "../../../redux/actions/order-list";
import InitOrderModal from '../../molecules/modal/index';
import OrderUpcoming from "../../molecules/order-upcoming/order-upcoming";
import { styles } from "./styles";



const UpcomingTab = (props) => {

  const dispatch = useDispatch();

  const toDoOrderList = useSelector(state => state.orderList.filterToDoList);
  const doingList = useSelector(state => state.orderList.filterDoingList);
  const autoAcceptOrder = useSelector(state => state.behavior.autoAcceptOrder);
  const partnerAccount = useSelector(state => state.account.partner);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [visible, setVisible] = useState(false);
  const [newOrder, setNewOrder] = useState({})
  const isFocused = useIsFocused();

  const loadOrderList = useCallback(async () => {
    setIsLoading(true);
    try {
      setError();
      dispatch(getAcceptOrderToday(partnerAccount.id));
      dispatch(getPreparationOrderToday(partnerAccount.id));
      dispatch(getReadinessOrderToday(partnerAccount.id))
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  }, [dispatch, setError, setIsLoading])

  // React.useMemo(() => {
  //   dispatch(getOrderAfterUpdate(OrderStatus.PREPARATION));
  // }, [doingList])

  // Notifications.addNotificationReceivedListener((notification) => {
  //   setNewOrder(notification.request.content.data.order);
  //   setVisible(true)
  // });



  const handleUpdateStatus = async (status, id) => {
      try {
        console.log({ status })
        switch (status) {
          case OrderStatus.PREPARATION:
            dispatch(setOrderStatus(id, OrderStatus.PREPARATION));
            break;
          case OrderStatus.ARRIVAL:
            dispatch(setOrderStatus(id, OrderStatus.ARRIVAL));
            break;
          case (OrderStatus.WAITING):
            console.log('in wait switch')
            dispatch(setOrderStatus(id, OrderStatus.WAITING));
            break;
          case 'doing':
            dispatch(setOrderStatus(id, OrderStatus.READINESS));
            break;
          case 'to-do':
            dispatch(setOrderStatus(id, OrderStatus.PREPARATION));
          default:
            break;
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



  useEffect(() => {
    loadOrderList();
    (() => {
      listenInComingOrder(partnerAccount.id, (listInitOrder) => {
        if (listInitOrder) {
          const listInit = Object.values(listInitOrder);
          if (listInit.length > 0) { setVisible(true) }
          dispatch({ type: SET_LIST_INIT_ORDER, payload: { listInit } })
        } else {
          setVisible(false);
          loadOrderList();
        }
      })
    })();
  }, [dispatch, loadOrderList]);

  // if (error) {
  //   return (
  //     <ErrorModal
  //       loadOrderList={() => loadOrderList()}
  //     />

  //   )
  // }

  // if (isLoading) {
  //   return (
  //     <View style={styles.centered}>
  //       <ActivityIndicator size="large" color={PRIMARY_COLOR} />
  //     </View>
  //   )
  // };

  return (
    <View style={{ flex: 1, backgroundColor: LIGHT_COLOR }}>
      <View style={styles.switch_view}>
        <InitOrderModal visible={visible} handleAcceptAllOrder={() => { console.log('accept all order') }} setVisible={setVisible} />
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
