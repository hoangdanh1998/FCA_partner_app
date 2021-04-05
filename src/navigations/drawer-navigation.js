import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { BACKGROUND_COLOR, HEADER_FONT_SIZE } from '../constance/constance';
import ProfileDrawerContent from './drawer-content/index';
import HomeStackScreen from './home-stack-screen';
import OrderStatisticScreen from './order-statistic/order-statistic-stack';


const Drawer = createDrawerNavigator();

const MenuDrawer = (props) => {
    console.log("dawer props", props);
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
                width: 500,


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
                component={OrderStatisticScreen} />
            {/* <Drawer.Screen
                name="STORE_PROFILE"
                initialParams={{ handleLogOut }}
                component={ProfileStackScreen}
                options={{
                    title: "THÔNG TIN CỬA HÀNG",

                }}
            /> */}


        </Drawer.Navigator>
    );
};

export default MenuDrawer;