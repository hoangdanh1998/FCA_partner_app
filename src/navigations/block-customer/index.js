
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { MyHeader } from '../../components/atoms/header/Header';
import BlockUserScreen from '../../screens/block-user/index';


const BlockCustomer = createStackNavigator();

function BlockCustomerStackScreen(props) {
    const handleLogOut = props.route.params.handleLogOut;
    return (
        // <NavigationContainer>
            <BlockCustomer.Navigator
                screenOptions={{
                    header: (props) => (
                        <MyHeader {...props} handleLogOut = {handleLogOut} />
                    )
                }}
            >
                <BlockCustomer.Screen name="ITEM_CATALOG" component={BlockUserScreen} />  
            </BlockCustomer.Navigator>
            
        // </NavigationContainer>

    );
};

export default BlockCustomerStackScreen;