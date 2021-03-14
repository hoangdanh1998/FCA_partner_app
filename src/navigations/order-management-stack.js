import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MyHeader } from '../components/atoms/header/Header';
import OrderManagement from '../screens/orders-management';

const OrderManagementStack = createStackNavigator();



function OrderManagementStackScreen(props) {
    const handleLogOut = props.route.params.handleLogOut;
    console.log("props home stack", props.route.params);
    return (
        // <NavigationContainer>
            <OrderManagementStack.Navigator
                screenOptions={{
                    header: (props) => (
                        <MyHeader {...props} handleLogOut = {handleLogOut} />
                    )
                }}
            >
                <OrderManagementStack.Screen name="ORDER_MANAGEMENT_STACK" component={OrderManagement} />
            </OrderManagementStack.Navigator>
            
        // </NavigationContainer>

    );
};

export default OrderManagementStackScreen;