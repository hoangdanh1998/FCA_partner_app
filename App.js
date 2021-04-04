import React from "react";
import { StyleSheet } from "react-native";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./src/redux/reducers/root-reducer";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import Constants from "expo-constants";
import * as Notifications from "expo-notifications";
import * as firebase from "firebase";
import LoginNavigation from "./src/navigations/login-navigation";

import { LogBox } from "react-native";

LogBox.ignoreAllLogs();
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font,
    });
    await Font.loadAsync(
      "antoutline",
      // eslint-disable-next-line
      require("@ant-design/icons-react-native/fonts/antoutline.ttf")
    );
    this.setState({ isReady: true });

    registerForPushNotificationsAsync();

    await initializeFirebase();
  }

  render() {
    if (this.state.isReady) {
      return (
        <Provider store={store} styles={{ flex: 1 }}>
          <LoginNavigation />
        </Provider>
      );
    } else {
      return null;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

registerForPushNotificationsAsync = async () => {
  if (Constants.isDevice) {
    const {
      status: existingStatus,
    } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Ứng dụng cần được cấp quyền thông báo để hoạt động!");
      return;
    }
    const token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert("Must use physical device for Push Notifications");
  }

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true,
    }),
  });
  console.log("app.js 98");
};

function initializeFirebase() {
  const firebaseConfig = {
    apiKey: "AIzaSyAYB22QAFUtlPnYjUOxoliIjNCHDJjvoQ8",
    authDomain: "fast-coffee-2021.firebaseapp.com",
    databaseURL: "https://fast-coffee-2021-default-rtdb.firebaseio.com/",
    projectId: "fast-coffee-2021",
    storageBucket: "fast-coffee-2021.appspot.com",
    messagingSenderId: "319088293595",
    appId: "1:319088293595:android:f060f3945112b44b463efe",
  };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
}
