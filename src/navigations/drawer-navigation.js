import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from '../screens/login/index';
import Register from '../screens/register/index';
import React from 'react'


const Drawer = createDrawerNavigator();

const MenuDrawer = () => {
    return (
        <Drawer.Navigator>
            {/* <Drawer.Screen name="LOGIN" component={Login} /> */}
            <Drawer.Screen name="REGISTER" component={Register} />
        </Drawer.Navigator>
    );
};

export default MenuDrawer;