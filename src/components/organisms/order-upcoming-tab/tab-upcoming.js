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
import { setModalVisible } from "../../../redux/action/modal";


const UpcomingTab = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const modalVisibleState = useSelector(state => state.modalVisible.modalVisible);
  const dispatch = useDispatch();
  const [newOrder, setNewOrder] = useState({})

  const modalVisibleHandler = () => {
    dispatch(setModalVisible());
}

  const toDoOrderList = useSelector(state => state.orderList.filterToDoList);
  const doingList = useSelector(state => state.orderList.filterDoingList);

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

  const handleNotification = notification => {
    setNewOrder(notification.request.content.data.order);
    modalVisibleHandler();
    
}

Notifications.addNotificationReceivedListener(handleNotification);
  
  useEffect(() => {
    
    loadOrderList();
  }, [dispatch, loadOrderList]);

  if (error) {
    return (
      // <View style={styles.centered}>
      //   <Text style={styles.error_message}>Hiện tại hệ thống đang gặp vấn đề</Text>
      //   <TouchableHighlight
      //     onPress={loadOrderList}
      //     underlayColor={"#D5E8D4"}
      //     activeOpacity={0.9}
      //     style={styles.button}
      //   >
      //     <Text style={[styles.text, styles.textButton, styles.boldText]}>
      //       Thử lại
      //     </Text>
      //   </TouchableHighlight>
      // </View>

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
      {!modalVisibleState ? null : <NewOrderModal newOrder={newOrder}/>}
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
