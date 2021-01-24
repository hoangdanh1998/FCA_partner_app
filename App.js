
import React, {useEffect} from 'react';
import { StyleSheet} from 'react-native';
import Navigation from './src/navigations/Navigation'
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';


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
      return <Navigation/>
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
