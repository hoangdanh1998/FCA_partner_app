import React from "react";
import { View } from "react-native";
import { Root } from 'native-base'
import UpcomingTab from "../../components/organisms/order-upcoming-tab/tab-upcoming";

const HomeScreen = () => {

  return (
    <Root>
      <View style={{ flex: 1 }}>
        <UpcomingTab />
      </View>
    </Root>

  );
};

export default HomeScreen;
