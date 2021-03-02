import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { MyHeader } from '../components/atoms/header/Header';
import QRCode from '../components/atoms/qr-code/qr-code';

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