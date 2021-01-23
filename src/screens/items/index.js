import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import SearchBar from "../../components/atoms/SearchBar";
import useResults from "../../hooks/useResults";
import ResultsList from "../../components/molecules/ResultsList";
import OrderCardUpComing from "../../components/molecules/order-card-upcoming/order-card-upcoming";
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

  var sampleOrderList = {
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
    <View style={{ flex: 1, flexDirection: "row" }}>
      <OrderUpcoming orderList={sampleOrderList} />
      <OrderUpcoming orderList={sampleDoingList} />
    </View>
  );
};

export default SearchScreen;
