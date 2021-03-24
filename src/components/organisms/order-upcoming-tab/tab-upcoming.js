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
  
  const loadOrderList = useCallback(async () => {
    setIsLoading(true);
    try {
      setError();
      dispatch(getAcceptOrderToday(partnerAccount.id));
      dispatch(getPreparationOrderToday(partnerAccount.id));
      dispatch(getReadinessOrderToday(partnerAccount.id));
      
      
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

  const handleUpdateStatus = async (status, id) => {
    try {
        switch (status) {
          case OrderStatus.PREPARATION:
            dispatch(setOrderStatus(id, OrderStatus.PREPARATION));
            break;
          case OrderStatus.ARRIVAL:
            dispatch(setOrderStatus(id, OrderStatus.ARRIVAL));
            break;
          case (OrderStatus.WAITING):
            dispatch(setOrderStatus(id, OrderStatus.WAITING));
            break;
          case 'doing':
            dispatch(setOrderStatus(id, OrderStatus.READINESS));
            break;
          case 'to-do':
            dispatch(setOrderStatus(id, OrderStatus.PREPARATION));
            case OrderStatus.CANCELLATION: {
              dispatch(updateListApterChangeStatus(id, status));
            }
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
    }



  useEffect(() => {
    loadOrderList();
    firebase.listenInComingOrder(partnerAccount.id, async (listInitOrder) => {
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
          <Text> Đã tự động tiếp nhận {countOrderAccepted} đơn hàng </Text> : null
        }
        <Right></Right>

      </View>
      <View style={styles.order_view}>

        <OrderUpcoming handleUpdateStatus={handleUpdateStatus} orderList={toDoOrderList} status="to-do" />
        <OrderUpcoming handleUpdateStatus={handleUpdateStatus} orderList={doingList} status="doing" />
      </View>
    </View>
  );
};

export default UpcomingTab;
