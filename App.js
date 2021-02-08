
import React, {useEffect} from 'react';
import { StyleSheet} from 'react-native';
import Navigation from './src/navigations/Navigation'
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { View } from 'native-base';
import {MyHeader} from './src/components/atoms/header/Header';
import {createStore} from 'redux';
import {rootReducer} from './src/redux/reducers/root-reducer';
import {Provider} from 'react-redux'
import HomeStackScreen from './src/navigations/home-stack-screen';


const store = createStore(rootReducer);
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if(this.state.isReady){
      return (
        <Provider store={store} styles={{flex:1}}>
          {/* <HeaderStackScreen style={{backgroundColor:"red"}} /> */}
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
