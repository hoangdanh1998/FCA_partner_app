import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/items';
import TabReadyScreen from '../screens/tab-ready';
import QRCode from '../components/atoms/qr-code/qr-code';
import { MyHeader } from '../components/atoms/header/Header';

const HeaderStack = createStackNavigator();

function HeaderStackScreen() {
    return (
        <NavigationContainer>
        <HeaderStack.Navigator>
            <HeaderStack.Screen name="HEADER" component={MyHeader} />
            <HeaderStack.Screen name="QRCODE" component={QRCode} />
        </HeaderStack.Navigator>
        </NavigationContainer>

    );
};

export default HeaderStackScreen;