import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/items';
import TabReadyScreen from '../screens/tab-ready';

const ReadyStack = createStackNavigator();

function ReadyStackScreen() {
    return (
        <ReadyStack.Navigator>
            <ReadyStack.Screen name="READY" component={TabReadyScreen} />
            <ReadyStack.Screen name="HOME" component={HomeScreen} />  
        </ReadyStack.Navigator>
    );
}

export default ReadyStackScreen;