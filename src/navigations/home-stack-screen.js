import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigation from './Navigation';
import { MyHeader } from '../components/atoms/header/Header';
import QRCode from '../components/atoms/qr-code/qr-code';
import SignUp from '../components/atoms/sign-up';

const HomeStack = createStackNavigator();


function HomeStackScreen() {
    return (
        <NavigationContainer>
            <HomeStack.Navigator
                screenOptions={{
                    header: (props) => (
                        <MyHeader {...props} />
                    )
                }}
            >
                
                <HomeStack.Screen name="HOME" component={TabNavigation} />
                <HomeStack.Screen name="QRCODE" component={QRCode} />
                <HomeStack.Screen name="SIGNUP" component={SignUp} />
            </HomeStack.Navigator>
            
        </NavigationContainer>

    );
};

export default HomeStackScreen;