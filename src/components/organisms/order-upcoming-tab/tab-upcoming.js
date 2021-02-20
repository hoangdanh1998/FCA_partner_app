import React, { useState } from "react";
import { View } from "react-native";
import { Switch, Content, Text, Left, Right, Body } from "native-base";
import OrderUpcoming from "../../molecules/order-upcoming/order-upcoming";
import { styles } from "./styles";

const UpcomingTab = (props) => {

  const toDoOrderList = props.toDoOrderList;
  const doingList = props.doingList;
  return (
    <View style={{ flex: 1, backgroundColor: '#e6d7ab' }}>
      <View style={styles.switch_view}>
        <Left></Left>
        <Body style={styles.switch_container}>
          <Switch style={styles.switch} />
          <Text style={styles.switch_text}>Tự động tiếp nhận đơn hàng mới</Text>
        </Body>
        <Right />
      </View>
      <View style={styles.order_view}>
        <OrderUpcoming orderList={toDoOrderList} status="to-do"/>
        <OrderUpcoming orderList={doingList} status="doing"/>
      </View>
    </View>
  );
};

export default UpcomingTab;
