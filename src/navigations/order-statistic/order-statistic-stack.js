import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { MyHeader } from '../../components/atoms/header/Header';
import OrderStatisticComponent from '../../screens/order-statistic/index';

const OrderStatistic = createStackNavigator();


function OrderStatisticScreen(props) {
    const handleLogOut = props.route.params.handleLogOut;
    return (
        // <NavigationContainer>
            <OrderStatistic.Navigator
                screenOptions={{
                    header: (props) => (
                        <MyHeader {...props} handleLogOut = {handleLogOut} />
                    )
                }}
            >
                <OrderStatistic.Screen name="ODER_STATISTIC_STACK" component={OrderStatisticComponent} />    
            </OrderStatistic.Navigator>
            
        // </NavigationContainer>

    );
};

export default OrderStatisticScreen;