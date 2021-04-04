import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { finishLoading, restoreToken, signOut } from '../redux/actions/account';
import LoadingPage from '../screens/loading-page/index';
import Login from '../screens/login';
import MenuDrawer from './drawer-navigation';
import HomeStackScreen from './home-stack-screen';
import LoginStackScreen from './login-navigation/index'



const LoginStack = createStackNavigator();



function LoginNavigation() {

    // const [isLoading, setIsLoading] = useState(true)

    const isLoading = useSelector(state => state.account.isLoading);
    const isSignOut = useSelector(state => state.account.isSignOut);
    const token = useSelector(state => state.account.token);
    const dispatch = useDispatch();


    const handleGetToken = async () => {
        try {
            let token = await AsyncStorage.getItem('@storage_Token');
            let partner = await AsyncStorage.getItem('@storage_Partner');
            if (token !== null) {
                token = JSON.parse(token);
                partner = JSON.parse(partner)
                await dispatch(restoreToken(token, partner));
            }
            await dispatch(finishLoading());
        } catch (e) {
            console.error("get token from store: ", e);
        }


    }

    const handleLogOut = () => {

        return dispatch(signOut());
    }

    useEffect(() => {
        handleGetToken();
    }, []);



    return (
        <NavigationContainer>
            <LoginStack.Navigator
                headerMode="none"

            >
                {isLoading ? <LoginStack.Screen
                    name="LOADING_PAGE"
                    component={LoadingPage}
                />
                    : token == null ? <LoginStack.Screen name="LOGIN"
                        component={LoginStackScreen}
                        initialParams={{ handleLogOut }}
                        options={{
                            title: "Sign in",
                            animationTypeForReplace: isSignOut ? 'pop' : 'push'
                        }} />
                        : <LoginStack.Screen
                            name="HOME_STACK"
                            component={MenuDrawer}
                            initialParams={{ handleLogOut }}
                        />}

            </LoginStack.Navigator>

        </NavigationContainer>
    )

}

export default LoginNavigation;