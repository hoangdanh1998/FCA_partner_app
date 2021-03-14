import React from 'react';
import HomeScreen from '../screens/items/index';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TabReadyScreen from '../screens/tab-ready/index'
import { LIGHT_COLOR } from '../constance/constance';
import {useSelector} from 'react-redux';

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

export default function TabNavigation() {
    const toDoList = useSelector(state => state.orderList.filterToDoList);
    const doingList = useSelector(state => state.orderList.filterDoingList);
    const readyList = useSelector(state => state.orderList.filterReadyList);

    let count = toDoList.length + doingList.length;

    return (
        // <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: LIGHT_COLOR,
                    labelStyle: { fontSize: 20, color: '#603a18', fontWeight: 'bold' },
                    style: { backgroundColor: LIGHT_COLOR },
                }}                
                initialRouteName="UPCOMING">
                <Tab.Screen options={{tabBarLabel:`ĐANG ĐẾN (${count})`}} name="UPCOMING" component={HomeScreen} />
                <Tab.Screen options={{tabBarLabel:`SẴN SÀNG (${readyList.length})`}} name="READY" component={TabReadyScreen} />
            </Tab.Navigator>
        // </NavigationContainer>
    );
}