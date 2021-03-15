import React from 'react'
import { Text, View } from 'react-native'
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import { BACKGROUND_COLOR, HEADER_FONT_SIZE, LIGHT_COLOR } from '../../constance/constance';
import { Container, Content, Header } from 'native-base';
import ProfileContentDrawer from '../../components/atoms/profile-drawer/index'


export default function ProfileDrawerContent(props) {
    
    return (

        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props} >
                <DrawerItem
                style = {{width: "100%", marginLeft: 0, marginTop: 0, backgroundColor: LIGHT_COLOR}}
                    label={() => (<ProfileContentDrawer />)}
                />
                <DrawerItemList {...props} />
                <DrawerItem
                    label={() => (<Text
                        style={{
                            fontSize: HEADER_FONT_SIZE,
                            color: "#696969",

                        }}
                    >Logout</Text>)}
                    // icon={() => (
                    //     <MaterialCommunity
                    //         name="logout"
                    //         color="#696969"
                    //         size={25}
                    //     />
                    // )}
                    onPress={() => alert('Link to help')} />
            </DrawerContentScrollView>
        </View>



    );
}