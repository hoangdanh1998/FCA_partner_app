import React, { useState, useEffect, useCallback } from "react";
import { View, ActivityIndicator, TouchableHighlight } from "react-native";
import { Switch, Text, Left, Right, Body } from "native-base";
import { useSelector, useDispatch } from 'react-redux';
import OrderUpcoming from "../../molecules/order-upcoming/order-upcoming";
import { PRIMARY_COLOR } from "../../../constance/constance";
import { getAcceptOrderToday, getPreparationOrderToday } from "../../../redux/action/order-list";
import { styles } from "./styles";
import ErrorModal from "../../atoms/error-modal";
import * as Notifications from 'expo-notifications';
import NewOrderModal from "../../molecules/new-order-modal/new-order-modal";
import { setOrderStatus } from '../../../redux/action/order-list';
import { OrderStatus } from '../../../constance/constance'
import { setTrackingOrder } from '../../../firebase/realtime-database/creator'
const UpcomingTab = (props) => {

  const dispatch = useDispatch();
  
  const toDoOrderList = useSelector(state => state.orderList.filterToDoList);
  const doingList = useSelector(state => state.orderList.filterDoingList);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [visible, setVisible] = useState(false);
  const [newOrder, setNewOrder] = useState({})

  const loadOrderList = useCallback(async () => {
    setIsLoading(true);
    try {
      await dispatch(getAcceptOrderToday());
      await dispatch(getPreparationOrderToday());
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  },[dispatch, setError, setIsLoading])

  Notifications.addNotificationReceivedListener((notification) => {
      // console.log('hello')
      setNewOrder(notification.request.content.data.order);
    setVisible(true)
  });

  const handleRejectOrder = () => {
    console.log('handle reject')
    dispatch(setOrderStatus(newOrder.id, OrderStatus.REJECTION));
    setVisible(false);

  }

  const handleAcceptOrder = async () => {
    console.log('handle accept')
    await dispatch(setOrderStatus(newOrder.id, OrderStatus.ACCEPTANCE));
    setTrackingOrder(newOrder.id, 0);
    setVisible(false)
    await dispatch(getAcceptOrderToday());
  }
  useEffect(() => {
    loadOrderList();
  }, [dispatch, loadOrderList]);

  if (error) {
    return (
      <ErrorModal
        loadOrderList = {() => loadOrderList()}
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
      <NewOrderModal newOrder={newOrder} handleAcceptOrder={handleAcceptOrder} handleRejectOrder={handleRejectOrder} visible={visible} />
      <View style={styles.switch_view}>
        <Left></Left>
        <Body style={styles.switch_container}>
          <Switch style={styles.switch} />
          <Text style={styles.switch_text}>Tự động tiếp nhận đơn hàng mới</Text>
        </Body>
        <Right />
      </View>
      <View style={styles.order_view}>
        
        <OrderUpcoming orderList={toDoOrderList} status="to-do" />
        <OrderUpcoming orderList={doingList} status="doing" />
      </View>
    </View>
  );
};

export default UpcomingTab;
