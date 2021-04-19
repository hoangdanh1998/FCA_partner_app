import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Login from '../../screens/login';
import RegisterAccountScreen from '../../screens/register-account';
import OtpSmsScreen from '../../screens/otp-sms/index'
import { BACKGROUND_COLOR } from '../../constance/constance';

const LoginStack = createStackNavigator();


function LoginStackScreen(props) {
    // console.log("props of login stack ", props.route.params.handleLogOut);
    const handleLogOut = props.route.params.handleLogOut;
    // const handleLogOut = props.route.params.handleLogOut;
    return (

        <LoginStack.Navigator
            screenOptions={{ headerShow: false }}
        >

            <LoginStack.Screen name="LOGIN" component={Login} options={{ headerShown: false }} />
            <LoginStack.Screen name="REGISTER_ACCOUNT"
                options={{
                    title: "Đăng ký tài khoản",
                    headerStyle: { backgroundColor: BACKGROUND_COLOR },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}

                component={RegisterAccountScreen} />
            <LoginStack.Screen name="OTP_SMS"
                component={OtpSmsScreen}
                options={{
                    title: "Xác thực OTP",
                    headerStyle: { backgroundColor: BACKGROUND_COLOR },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
                initialParams={{ handleLogOut }}
            />
        </LoginStack.Navigator>

    );
};

export default LoginStackScreen;