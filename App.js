
import React from 'react';
import { StyleSheet} from 'react-native';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import {createStore, applyMiddleware} from 'redux';
import {rootReducer} from './src/redux/reducers/root-reducer';
import {Provider} from 'react-redux'
import HomeStackScreen from './src/navigations/home-stack-screen';
import  ReduxThunk  from  'redux-thunk';


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
