import React, { useState } from "react";
import { View } from "react-native";
import { Switch, Content, Text, Left, Right, Body } from "native-base";
// import useResults from "../../hooks/useResults";
import OrderUpcoming from "../../molecules/order-upcoming/order-upcoming";
import { styles } from "./styles";

const UpcomingTab = (props) => {
  // var sampleOrderList = {
  //   status: "to-do",
  //   orders: [
  //     {
  //       phone: "0987654321",
  //       estTime: 10,
  //       status: "acceptance",
  //       items: [
  //         {
  //           name: "Chocolate",
  //           quantity: 1,
  //         },
  //         {
  //           name: "Expresso",
  //           quantity: 1,
  //         },
  //       ],
  //     },
  //     {
  //       phone: "0987654321",
  //       estTime: 20,
  //       status: "acceptance",
  //       items: [
  //         {
  //           name: "Chocolate",
  //           quantity: 1,
  //         },
  //         {
  //           name: "Expresso",
  //           quantity: 1,
  //         },
  //       ],
  //     },
  //     {
  //       phone: "0987654321",
  //       estTime: 30,
  //       status: "acceptance",
  //       items: [
  //         {
  //           name: "Chocolate",
  //           quantity: 1,
  //         },
  //       ],
  //     },
  //     {
  //       phone: "0987654321",
  //       estTime: 30,
  //       status: "acceptance",
  //       items: [
  //         {
  //           name: "Chocolate",
  //           quantity: 1,
  //         },
  //       ],
  //     },
  //     {
  //       phone: "0987654321",
  //       estTime: 30,
  //       status: "acceptance",
  //       items: [
  //         {
  //           name: "Chocolate",
  //           quantity: 1,
  //         },
  //       ],
  //     },
  //     {
  //       phone: "0987654321",
  //       estTime: 30,
  //       status: "acceptance",
  //       items: [
  //         {
  //           name: "Chocolate",
  //           quantity: 1,
  //         },
  //       ],
  //     },
  //     {
  //       phone: "0987654321",
  //       estTime: 30,
  //       status: "acceptance",
  //       items: [
  //         {
  //           name: "Chocolate",
  //           quantity: 1,
  //         },
  //         {
  //           name: "Expresso",
  //           quantity: 1,
  //         },
  //       ],
  //     },
  //     {
  //       phone: "0987654321",
  //       estTime: 30,
  //       status: "acceptance",
  //       items: [
  //         {
  //           name: "Chocolate",
  //           quantity: 1,
  //         },
  //         {
  //           name: "Expresso",
  //           quantity: 1,
  //         },
  //       ],
  //     },
  //   ],
  // };

  // var sampleDoingList = {
  //   status: "doing",
  //   orders: [
  //     {
  //       phone: "0987654321",
  //       estTime: 10,
  //       status: "preparation",
  //       items: [
  //         {
  //           name: "Chocolate",
  //           quantity: 1,
  //         },
  //         {
  //           name: "Expresso",
  //           quantity: 1,
  //         },
  //       ],
  //     },
  //     {
  //       phone: "0987654321",
  //       estTime: 20,
  //       status: "preparation",
  //       items: [
  //         {
  //           name: "Chocolate",
  //           quantity: 1,
  //         },
  //         {
  //           name: "Expresso",
  //           quantity: 1,
  //         },
  //       ],
  //     },
  //     {
  //       phone: "0987654321",
  //       estTime: 30,
  //       status: "preparation",
  //       items: [
  //         {
  //           name: "Chocolate",
  //           quantity: 1,
  //         },
  //       ],
  //     },
  //     {
  //       phone: "0987654321",
  //       estTime: 30,
  //       status: "preparation",
  //       items: [
  //         {
  //           name: "Chocolate",
  //           quantity: 1,
  //         },
  //       ],
  //     },
  //     {
  //       phone: "0987654321",
  //       estTime: 30,
  //       status: "preparation",
  //       items: [
  //         {
  //           name: "Chocolate",
  //           quantity: 1,
  //         },
  //       ],
  //     },
  //     {
  //       phone: "0987654321",
  //       estTime: 30,
  //       status: "preparation",
  //       items: [
  //         {
  //           name: "Chocolate",
  //           quantity: 1,
  //         },
  //       ],
  //     },
  //     {
  //       phone: "0987654321",
  //       estTime: 30,
  //       status: "preparation",
  //       items: [
  //         {
  //           name: "Chocolate",
  //           quantity: 1,
  //         },
  //         {
  //           name: "Expresso",
  //           quantity: 1,
  //         },
  //       ],
  //     },
  //     {
  //       phone: "0987654321",
  //       estTime: 30,
  //       status: "preparation",
  //       items: [
  //         {
  //           name: "Chocolate",
  //           quantity: 1,
  //         },
  //         {
  //           name: "Expresso",
  //           quantity: 1,
  //         },
  //       ],
  //     },
  //   ],
  // };
  const sampleOrderList = props.sampleOrderList;
  const sampleDoingList = props.sampleDoingList;
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.switch_view}>
        <Left></Left>
        <Body style={styles.switch_container}>
          <Switch style={styles.switch} />
          <Text style={styles.switch_text}>Automatic accept orders</Text>
        </Body>
        <Right />
      </View>
      <View style={styles.order_view}>
        <OrderUpcoming orderList={sampleOrderList} />
        <OrderUpcoming orderList={sampleDoingList} />
      </View>
    </View>
  );
};

export default UpcomingTab;
