import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from '../screens/login/index';
import Register from '../screens/register/index';
import React from 'react'
import HomeStackScreen from './home-stack-screen';
import { BACKGROUND_COLOR, HEADER_FONT_SIZE, LIGHT_COLOR } from '../constance/constance';
import OrderManagementStackScreen from './order-management-stack';
import TabProfileNavigation from './tab-profile-navigation';
import ProfileStackScreen from './stack-profile-navigation';
import ProfileDrawerContent from './drawer-content/index'


const Drawer = createDrawerNavigator();

const MenuDrawer = (props) => {
    const handleLogOut = props.route.params.handleLogOut;
    return (
        <Drawer.Navigator
            initialRouteName="HOME_DRAWER"
            drawerContent={
                props => (<ProfileDrawerContent {...props} handleLogOut = {handleLogOut} />)
            }
            drawerContentOptions={{
                labelStyle: {
                    fontSize: HEADER_FONT_SIZE,
                    fontWeight: "bold",
                    marginTop: 0
                },
                activeTintColor: "#ffff",
                activeBackgroundColor: BACKGROUND_COLOR,
                
            }}
            drawerStyle={{
                backgroundColor: "#fff",
                width: 400,


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
                initialParams={{ handleLogOut }}
                options={{
                    title: "QUẢN LÝ ĐƠN HÀNG",
                }}
                name="ORDER_MANAGEMENT"
                component={OrderManagementStackScreen} />
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