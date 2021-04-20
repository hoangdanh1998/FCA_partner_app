import { Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";
import * as Font from "expo-font";
import * as firebase from "firebase";
import React from "react";
import { LogBox, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import ReduxThunk from "redux-thunk";
import LoginNavigation from "./src/navigations/login-navigation";
import rootReducer from "./src/redux/reducers/root-reducer";


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
