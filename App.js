
import React from 'react';
import { StyleSheet} from 'react-native';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import {createStore, applyMiddleware} from 'redux';
import {rootReducer} from './src/redux/reducers/root-reducer';
import {Provider} from 'react-redux'
import HomeStackScreen from './src/navigations/home-stack-screen';
import  ReduxThunk  from  'redux-thunk';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  _handleNotification = notification => {
    console.log({ notification })
  };

  _handleNotificationResponse = response => {
    console.log({ response });
  };

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });

    registerForPushNotificationsAsync();
    Notifications.addNotificationReceivedListener(this._handleNotification);
    Notifications.setNotificationHandler
    Notifications.addNotificationResponseReceivedListener(this._handleNotificationResponse);
  }
  
  render() {
    if(this.state.isReady){
      return (
        <Provider store={store} styles={{flex:1}}>
          <HomeStackScreen/>
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

registerForPushNotificationsAsync = async () => {
  if (Constants.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Ứng dụng cần được cấp quyền thông báo để hoạt động!');
      return;
    }
    const token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }
};
