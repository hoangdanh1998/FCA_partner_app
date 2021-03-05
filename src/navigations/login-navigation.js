import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/login';
import HomeStackScreen from './home-stack-screen';



const LoginStack = createStackNavigator();

function LoginNavigation() {
    return (
        <NavigationContainer>
            <LoginStack.Navigator
                headerMode = "none"
            >
            <LoginStack.Screen name="LOGIN" component={Login} />
            <LoginStack.Screen 
                name="HOME_STACK" 
                component={HomeStackScreen} />
            </LoginStack.Navigator>
            
        </NavigationContainer>
    )

}

export default LoginNavigation;