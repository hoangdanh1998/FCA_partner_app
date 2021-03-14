import React from 'react'
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';


export default function ProfileDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItem label="Help" onPress={() => alert('Link to help')} />
            <DrawerItemList {...props} />
            <DrawerItem label="Help" onPress={() => alert('Link to help')} />
        </DrawerContentScrollView>
    );
}