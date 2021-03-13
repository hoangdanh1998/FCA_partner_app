import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MyHeader } from '../components/atoms/header/Header';
import TabProfileNavigation from './tab-profile-navigation';
const ProfileStack = createStackNavigator();


function ProfileStackScreen(props) {
    const handleLogOut = props.route.params.handleLogOut;
    console.log("props home stack", props.route.params);
    return (
        // <NavigationContainer>
            <ProfileStack.Navigator
                screenOptions={{
                    header: (props) => (
                        <MyHeader {...props} handleLogOut = {handleLogOut} />
                    )
                }}
            >
                <ProfileStack.Screen name="STORE_PROFILE_STACK" component={TabProfileNavigation} />    
            </ProfileStack.Navigator>
            
        // </NavigationContainer>

    );
};

export default ProfileStackScreen;