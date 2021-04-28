import { useIsFocused } from '@react-navigation/native';
import { Body, Left, Right, Switch, Text, Toast } from "native-base";
import React, { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { LIGHT_COLOR, OrderStatus, TOAST_FAIL_MESSAGE, TOAST_SUCCESS_MESSAGE } from "../../../constance/constance";
import * as firebase from '../../../firebase/firebase-realtime';
import { getAcceptOrderToday, getPreparationOrderToday, getReadinessOrderToday, setOrderStatus, SET_LIST_INIT_ORDER, updateListApterChangeStatus } from "../../../redux/actions/order-list";
import InitOrderModal from '../../molecules/modal/index';
import OrderUpcoming from "../../molecules/order-upcoming/order-upcoming";
import { styles } from "./styles";
import AwesomeAlert from 'react-native-awesome-alerts';


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
  const [autoAccept, setAutoAccept] = useState(false);
  const [listInitOrder, setListInitOrder] = useState();
  const [countOrderAccepted, setCountOrderAccepted] = useState(0);
  const [alertMessage, setAlertMessage] = useState();
  const [isShowAlert, setIsShowAlert] = useState(false);
  const [titleAlert, setTitleAlert] = useState();


  const loadOrderList = useCallback(async () => {
    setIsLoading(true);
    try {
      setError();
      dispatch(getAcceptOrderToday(partnerAccount?.id));
      dispatch(getPreparationOrderToday(partnerAccount?.id));
      dispatch(getReadinessOrderToday(partnerAccount?.id));


    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  }, [dispatch, setError, setIsLoading])

  const handleAcceptAllOrder = async (listOrder) => {
    await new Promise((resolve) => {
      const tmpList = listOrder.map((order) => {
        dispatch(setOrderStatus(order.id, OrderStatus.ACCEPTANCE));
        return order;
      })
      if (tmpList.length === listOrder) {
        resolve()
      }
    })

  }

  const showAlert = () => {
    console.log("hien alert len");
    setIsShowAlert(true);
  };

  const hideAlert = () => {
    setIsShowAlert(false);
  };

  const handleUpdateStatus = async (status, id) => {
    try {
      switch (status) {
        case OrderStatus.PREPARATION:
          await dispatch(setOrderStatus(id, OrderStatus.PREPARATION));
          break;
        case OrderStatus.ARRIVAL:
          await dispatch(setOrderStatus(id, OrderStatus.ARRIVAL));
          break;
        case (OrderStatus.WAITING):
          await dispatch(setOrderStatus(id, OrderStatus.WAITING));
          break;
        case 'doing':
          await dispatch(setOrderStatus(id, OrderStatus.READINESS));
          break;
        case 'to-do':
          await dispatch(setOrderStatus(id, OrderStatus.PREPARATION));
        // case OrderStatus.A: {
        //   dispatch(updateListApterChangeStatus(id, status));
        // }
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
      console.error("err update status", error);
    }
  }

  const handleUpdateListApterChangeStatus = async (order, realtimeStatus) => {
    try {
      await dispatch(updateListApterChangeStatus(order.id, order.status));
      showAlert();
      setTitleAlert(`Đơn hàng của ${order.customer.account.phone}`)
      if (realtimeStatus === OrderStatus.CANCELLATION) {
        setAlertMessage(
          `Đã được nhân viên huỷ thành công`
        )
      } else if (realtimeStatus === OrderStatus.RECEPTION) {
        setAlertMessage(
          `Đã được nhân viên xác nhận thành công`
        )
      }


    } catch (error) {
      setTitleAlert(`Đơn hàng của ${order.customer.account.phone}`)
      if (realtimeStatus === OrderStatus.CANCELLATION) {
        setAlertMessage(
          `Huỷ thất bại`
        )
      } else if (realtimeStatus === OrderStatus.RECEPTION) {
        setAlertMessage(
          `Xác nhận thất bại`
        )
      }
    }

  }



  useEffect(() => {
    loadOrderList();
    firebase.listenInComingOrder(partnerAccount?.id, async (listInitOrder) => {
      setListInitOrder(listInitOrder)
      if (listInitOrder) {
        const listInit = Object.values(listInitOrder);
        dispatch({ type: SET_LIST_INIT_ORDER, payload: { listInit } })
      } else {
        loadOrderList();
      }
    })
  }, []);

  useEffect(() => {
    loadOrderList();
    if (listInitOrder) {
      const listInit = Object.values(listInitOrder);
      setCountOrderAccepted(prev => prev + listInit.length)
      if (autoAccept) {
        setVisible(false);
        handleAcceptAllOrder(listInit);
      } else {
        setVisible(true);
      }
    } else {
      setVisible(false);
    }
  }, [listInitOrder, autoAccept])

  return (
    <View style={{ flex: 1, backgroundColor: LIGHT_COLOR }}>
      <AwesomeAlert
        show={isShowAlert}
        showProgress={false}
        title={titleAlert}
        message={alertMessage}
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showConfirmButton={true}
        titleStyle={[styles.titleAlert, styles.boldText]}
        messageStyle={[styles.title_font_size]}
        confirmText="OK"
        confirmButtonColor="#DD6B55"
        onDismiss={()=>{hideAlert()}}
        onConfirmPressed={() => {
          hideAlert();
        }}
        confirmButtonTextStyle={[styles.title_font_size, styles.boldText]}
      />
      <View style={styles.switch_view}>
        <InitOrderModal visible={visible} handleAcceptAllOrder={handleAcceptAllOrder} />
        <Body style={styles.switch_container}>
          <Switch style={styles.switch} onValueChange={(value) => {
            // dispatch({
            //   type: AUTO_ACCEPT_ORDER,
            //   payload: { autoAcceptOrder: value }
            // })
            setAutoAccept(value)
          }} value={autoAccept} />
          <Text style={styles.switch_text}>Tự động tiếp nhận đơn hàng mới</Text>
        </Body>
        <Left></Left>
        {autoAccept ?
          <Text style = {styles.switch_text}> Đã tự động tiếp nhận <Text style = {{fontSize:24, fontWeight: "bold"}}>{countOrderAccepted}</Text> đơn hàng </Text> : null
        }
        <Right></Right>

      </View>
      <View style={styles.order_view}>

        <OrderUpcoming
          handleUpdateStatus={handleUpdateStatus}
          orderList={toDoOrderList} status="to-do"
          handleUpdateListApterChangeStatus={handleUpdateListApterChangeStatus}
        />
        <OrderUpcoming
          handleUpdateStatus={handleUpdateStatus}
          handleUpdateListApterChangeStatus={handleUpdateListApterChangeStatus}
          orderList={doingList}
          status="doing" />
      </View>
    </View>
  );
};

export default UpcomingTab;
