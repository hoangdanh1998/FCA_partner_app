import React, { useState, useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import {useSelector, useDispatch} from 'react-redux';
import UpcomingTab from "../../components/organisms/order-upcoming-tab/tab-upcoming";
import { PRIMARY_COLOR } from "../../constance/constance";
import { getAcceptOrderToday, getPreparationOrderToday } from "../../redux/action/order-list";
import {styles} from './style'
const HomeScreen = () => {

  const [isLoading, setIsLoading] = useState(false);

  const toDoOrderList = useSelector(state => state.orderList.filterToDoList);
  const doingList = useSelector(state => state.orderList.filterDoingList);

  const dispatch = useDispatch();

  useEffect(() => {
    const loadOrderList = async () => {
      setIsLoading(true);
      await dispatch(getAcceptOrderToday());
      await dispatch(getPreparationOrderToday());
      setIsLoading(false);
    }
    loadOrderList();
  },[dispatch]);

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={PRIMARY_COLOR} />
      </View>
    )
  };

  return (
    <View style={{ flex: 1 }}>
      <UpcomingTab
        toDoOrderList={toDoOrderList}
        doingList={doingList}
      />
    </View>
  );
};

export default HomeScreen;
