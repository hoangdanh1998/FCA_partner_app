import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from '../screens/login/index';
import Register from '../screens/register/index';
import React from 'react'
import HomeStackScreen from './home-stack-screen';
import { BACKGROUND_COLOR, HEADER_FONT_SIZE, LIGHT_COLOR } from '../constance/constance';
import TabProfileNavigation from './tab-profile-navigation';
import ProfileStackScreen from './stack-profile-navigation';


const Drawer = createDrawerNavigator();

const MenuDrawer = (props) => {
    const handleLogOut = props.route.params.handleLogOut;
    return (
        <Drawer.Navigator
            initialRouteName="HOME_DRAWER"
            
            drawerContentOptions={{
                labelStyle: {
                    fontSize: HEADER_FONT_SIZE,
                    fontWeight: "bold",
                },
                activeTintColor: "#ffff",
                activeBackgroundColor: BACKGROUND_COLOR,
            }}
            drawerStyle={{
                backgroundColor: LIGHT_COLOR,

            }}
        >
            <Drawer.Screen
                initialParams={{ handleLogOut }}
                options={{
                    title: "TRANG CHỦ",
                }}
                name="HOME_DRAWER"
                component={HomeStackScreen}
            />
            <Drawer.Screen
                name="STORE_PROFILE"
                initialParams={{ handleLogOut }}
                component={ProfileStackScreen}
                options={{
                    title: "THÔNG TIN CỬA HÀNG",
                    
                }}
            />
            
            
        </Drawer.Navigator>
    );
};

export default MenuDrawer;