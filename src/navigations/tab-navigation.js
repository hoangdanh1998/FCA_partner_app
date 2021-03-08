import React from 'react';
import HomeScreen from '../screens/items/index';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TabReadyScreen from '../screens/tab-ready/index'

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

export default function TabNavigation() {
    return (
        // <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: '#e6d7ab',
                    labelStyle: { fontSize: 20, color: '#603a18', fontWeight: 'bold' },
                    style: { backgroundColor: '#e6d7ab' },
                }}                
                initialRouteName="UPCOMING">
                <Tab.Screen options={{tabBarLabel:"ĐANG ĐẾN"}} name="UPCOMING" component={HomeScreen} />
                <Tab.Screen options={{tabBarLabel:"SẴN SÀNG"}} name="READY" component={TabReadyScreen} />
            </Tab.Navigator>
        // </NavigationContainer>
    );
}