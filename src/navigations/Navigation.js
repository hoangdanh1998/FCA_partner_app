import React from 'react';
import HomeScreen from '../screens/items/index';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ResultShowScreen from '../screens/item-detail/index'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TabReadyScreen from '../screens/tab-ready/index'

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator tabBarOptions={{
        activeTintColor: '#e6d7ab',
        labelStyle: { fontSize: 20, color:'#603a18', fontWeight: 'bold' },
        style: { backgroundColor: '#e6d7ab' },
      }} initialRouteName="Home">
                <Tab.Screen name="UPCOMING" component={HomeScreen} />
                <Tab.Screen name="READY" component={TabReadyScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}