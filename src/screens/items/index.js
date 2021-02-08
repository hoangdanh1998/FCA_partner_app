import React, { useState } from "react";
import { View } from "react-native";
import {useSelector} from 'react-redux';
import { Switch, Text, Left, Right, Body } from "native-base";
import UpcomingTab from "../../components/organisms/order-upcoming-tab/tab-upcoming";
const HomeScreen = () => {
  const sampleOrderList = {
    status: "to-do",
    orders: [
      {
        phone: "0987654321",
        estTime: 10,
        status: "acceptance",
        items: [
          {
            name: "Chocolate",
            quantity: 1,
            price: 15000
          },
          {
            name: "Expresso",
            quantity: 1,
            price: 15000
          },
        ],
      },
      {
        phone: "0987654321",
        estTime: 20,
        status: "acceptance",
        items: [
          {
            name: "Chocolate",
            quantity: 1,
            price: 15000
          },
          {
            name: "Expresso",
            quantity: 1,
            price: 15000
          },
        ],
      },
      {
        phone: "0987654321",
        estTime: 30,
        status: "acceptance",
        items: [
          {
            name: "Chocolate",
            quantity: 1,
            price: 15000
          },
        ],
      },
      {
        phone: "0987654321",
        estTime: 30,
        status: "acceptance",
        items: [
          {
            name: "Chocolate",
            quantity: 1,
            price: 15000
          },
        ],
      },
      {
        phone: "0987654321",
        estTime: 30,
        status: "acceptance",
        items: [
          {
            name: "Chocolate",
            quantity: 1,
            price: 15000
          },
        ],
      },
      {
        phone: "0987654321",
        estTime: 30,
        status: "acceptance",
        items: [
          {
            name: "Chocolate",
            quantity: 1,
            price: 15000
          },
        ],
      },
      {
        phone: "0987654321",
        estTime: 30,
        status: "acceptance",
        items: [
          {
            name: "Chocolate",
            quantity: 1,
            price: 15000
          },
          {
            name: "Expresso",
            quantity: 1,
            price: 15000
          },
        ],
      },
      {
        phone: "0987654321",
        estTime: 30,
        status: "acceptance",
        items: [
          {
            name: "Chocolate",
            quantity: 1,
            price: 15000
          },
          {
            name: "Expresso",
            quantity: 1,
            price: 15000
          },
        ],
      },
    ],
  };

  const sampleDoingList = {
    status: "doing",
    orders: [
      {
        phone: "0987654321",
        estTime: 10,
        status: "preparation",
        items: [
          {
            name: "Chocolate",
            quantity: 1,
            price: 15000
          },
          {
            name: "Expresso",
            quantity: 1,
            price: 15000
          },
        ],
      },
      {
        phone: "0987654321",
        estTime: 20,
        status: "preparation",
        items: [
          {
            name: "Chocolate",
            quantity: 1,
            price: 15000
          },
          {
            name: "Expresso",
            quantity: 1,
            price: 15000
          },
        ],
      },
      {
        phone: "0987654321",
        estTime: 30,
        status: "preparation",
        items: [
          {
            name: "Chocolate",
            quantity: 1,
            price: 15000
          },
        ],
      },
      {
        phone: "0987654321",
        estTime: 30,
        status: "preparation",
        items: [
          {
            name: "Chocolate",
            quantity: 1,
            price: 15000
          },
        ],
      },
      {
        phone: "0987654321",
        estTime: 30,
        status: "preparation",
        items: [
          {
            name: "Chocolate",
            quantity: 1,
            price: 15000
          },
        ],
      },
      {
        phone: "0987654321",
        estTime: 30,
        status: "preparation",
        items: [
          {
            name: "Chocolate",
            quantity: 1,
            price: 15000
          },
        ],
      },
      {
        phone: "0987654321",
        estTime: 30,
        status: "preparation",
        items: [
          {
            name: "Chocolate",
            quantity: 1,
            price: 15000
          },
          {
            name: "Expresso",
            quantity: 1,
            price: 15000
          },
        ],
      },
      {
        phone: "0987654321",
        estTime: 30,
        status: "preparation",
        items: [
          {
            name: "Chocolate",
            quantity: 1,
            price: 15000
          },
          {
            name: "Expresso",
            quantity: 1,
            price: 15000
          },
        ],
      },
    ],
  };

  const toDoOrderList = useSelector(state => state.orderList.filterToDoList)
  const doingList = useSelector(state => state.orderList.filterDoingList)
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
