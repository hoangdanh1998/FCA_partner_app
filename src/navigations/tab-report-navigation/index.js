import React from 'react';
// import HomeScreen from '../screens/items/index';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import TabReadyScreen from '../screens/tab-ready/index'
import { LIGHT_COLOR } from '../../constance/constance';
import {useSelector} from 'react-redux';
import OrderManagement from '../../screens/orders-management';
import TabReportDetails from '../../screens/tab-report-details';
import OrderStatistic from '../../screens/order-statistic';

const Tab = createMaterialTopTabNavigator();

export default function TabReportNavigator() {

    return (
        // <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: LIGHT_COLOR,
                    labelStyle: { fontSize: 20, color: '#603a18', fontWeight: 'bold' },
                    style: { backgroundColor: LIGHT_COLOR },
                }}                
                initialRouteName="REPORT">
                <Tab.Screen options={{tabBarLabel:`BÁO CÁO`}} name="REPORT" component={OrderStatistic} />
                <Tab.Screen options={{tabBarLabel:`CHI TIẾT`}} name="REPORT_DETAILS" component={TabReportDetails} />
            </Tab.Navigator>
        // </NavigationContainer>
    );
}