import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Login from '../../screens/login';
import RegisterAccountScreen from '../../screens/register-account';

const LoginStack = createStackNavigator();

function LoginStackScreen() {
    return (
        <LoginStack.Navigator
            screenOptions={{ headerShow: false }}
        >
            <LoginStack.Screen name="LOGIN" component={Login} options={{ headerShown: false }} />
            <LoginStack.Screen name="REGISTER_ACCOUNT"
                options={{title: "Đăng ký tài khoản"}}
                component={RegisterAccountScreen} />
        </LoginStack.Navigator>

    );
};

export default LoginStackScreen;