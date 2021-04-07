import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { MyHeader } from '../../components/atoms/header/Header';
import ContactUsScreen from '../../screens/contact-us';
import OrderStatisticComponent from '../../screens/order-statistic/index';

const ContactUsStack = createStackNavigator();

function ContactUsStackScreen(props) {
    const handleLogOut = props.route.params.handleLogOut;
    return (
        // <NavigationContainer>
            <ContactUsStack.Navigator
                screenOptions={{
                    header: (props) => (
                        <MyHeader {...props} handleLogOut = {handleLogOut} />
                    )
                }}
            >
                <ContactUsStack.Screen name="ODER_STATISTIC_STACK" component={ContactUsScreen} />    
            </ContactUsStack.Navigator>
            
        // </NavigationContainer>

    );
};

export default ContactUsStackScreen;