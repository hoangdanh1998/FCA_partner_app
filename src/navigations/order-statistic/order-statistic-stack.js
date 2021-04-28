import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { MyHeader } from '../../components/atoms/header/Header';
import ContactUsScreen from '../../screens/contact-us';
import OrderStatisticComponent from '../../screens/order-statistic/index';
import TabReportNavigator from '../tab-report-navigation/index';


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
                <OrderStatistic.Screen name="CONTACT_US_STACK" component={TabReportNavigator} />    
            </OrderStatistic.Navigator>
            
        // </NavigationContainer>

    );
};

export default OrderStatisticScreen;