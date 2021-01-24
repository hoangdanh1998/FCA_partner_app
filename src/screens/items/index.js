import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import useResults from "../../hooks/useResults";
import TabReady from '../../components/organisms/tab-ready/tab-ready';
import { Container, Tab, Tabs } from "native-base";
import { MyHeader } from '../../components/atoms/header/Header';
import { styles } from './style'
import OrderUpcoming from "../../components/organisms/order-upcoming/order-upcoming";

const SearchScreen = () => {
  const [errorMessage, results, searchApi] = useResults();
  const [term, setTerm] = useState("");

  const filterResultsByPrice = (price) => {
    //price === '$' or === '$$'' or === '$$$'
    return results.filter((results) => {
      return results.price === price;
    });
  };

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
          },
          {
            name: "Expresso",
            quantity: 1,
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
          },
          {
            name: "Expresso",
            quantity: 1,
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
          },
          {
            name: "Expresso",
            quantity: 1,
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
          },
          {
            name: "Expresso",
            quantity: 1,
          },
        ],
      },
    ],
  };

  var sampleDoingList = {
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
          },
          {
            name: "Expresso",
            quantity: 1,
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
          },
          {
            name: "Expresso",
            quantity: 1,
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
          },
          {
            name: "Expresso",
            quantity: 1,
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
          },
          {
            name: "Expresso",
            quantity: 1,
          },
        ],
      },
    ],
  };

  return (
    <View style={{ flex: 1 }}>
      <Container>
        <MyHeader />
        <Tabs
          style={styles.tabs}
        >
          <Tab heading="UPCOMING"
            tabStyle={styles.tabs}
          >
            
            <TabReady orderList={sampleOrderList} />
          </Tab>
          <Tab
            heading="READY"
            tabStyle={styles.tabs}
          >
            <TabReady orderList={sampleOrderList} />
          </Tab>
        </Tabs>

      </Container>
    </View>
  );
};

export default SearchScreen;
