import React, { useEffect } from "react";
import { View, BackHandler, Alert } from "react-native";
import { Root } from 'native-base'
import UpcomingTab from "../../components/organisms/order-upcoming-tab/tab-upcoming";
import {useDispatch} from 'react-redux';
import { getReport } from "../../redux/actions/reportAction";

const HomeScreen = (props) => {
  // console.log("props home: ", props.route.name);

  // const handleBackButton = () => {
  //   if (props.route.name == "UPCOMING") {
  //     Alert.alert("Xác nhận", "Bán muốn thoát ứng dụng ?", [
  //       {
  //         text: "Huỷ",
  //         onPress: () => null,
  //         style: "cancel"
  //       },
  //       { text: "Vâng", onPress: () => BackHandler.exitApp() }
  //     ]);
  //     return true;
  //   } else {
  //     return false;
  //   }

  // }


  // useEffect(() => {
  //   BackHandler.addEventListener("handleBackButton", handleBackButton);
  //   return () => {
  //     BackHandler.removeEventListener("handleBackButton", handleBackButton);
  //   };
  // }, [handleBackButton])

  

  return (
    <Root>
      <View style={{ flex: 1 }}>
        <UpcomingTab />
      </View>
    </Root>

  );
};

export default HomeScreen;
