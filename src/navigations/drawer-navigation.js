import { createDrawerNavigator } from '@react-navigation/drawer';
import { default as React, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Alert } from 'react-native'
import { BACKGROUND_COLOR, HEADER_FONT_SIZE } from '../constance/constance';
import { setDeviceKey } from '../redux/actions/account';
import ContactUsScreen from '../screens/contact-us';
import { updateExpoToken } from "../service/account/account";
import { getDeviceKeyOnChange, setDeviceKeyFirebase } from '../service/firebase/firebase-realtime';
import { registerForPushNotificationsAsync } from "../service/notification/expo-notification";
import ContactUsStackScreen from './contact-us/contact-us-stack';
import ProfileDrawerContent from './drawer-content/index';
import HomeStackScreen from './home-stack-screen';
import ItemCatalogStackScreen from './item-catalog';
import OrderStatisticScreen from './order-statistic/order-statistic-stack';
const Drawer = createDrawerNavigator();

const MenuDrawer = (props) => {

    const [listenAccount, setListenAccount] = useState(null);

    const dispatch = useDispatch();
    const partnerProfile = useSelector(state => state.account.partner);
    const deviceKey = useSelector((state) => state.account.deviceKey);

    const handleSetDeviceKey = async () => {
        const deviceKey = await registerForPushNotificationsAsync();
        console.log("device token:", deviceKey);
        updateExpoToken(deviceKey, partnerProfile?.account?.id);
        await setDeviceKeyFirebase(partnerProfile?.account?.id, deviceKey);

        dispatch(setDeviceKey(deviceKey));

    }

    useEffect(() => {
        handleSetDeviceKey();
    }, [])

    useEffect(() => {
        if (listenAccount && deviceKey) {
            if (deviceKey !== listenAccount.deviceKey) {
                Alert.alert(
                    "Thông báo",
                    "Tài khoản được đăng nhập từ thiết bị khác",
                    [
                        { text: "OK"}
                    ]
                );
                // alert("Tài khoản được đăng nhập từ thiết bị khác");
                handleLogOut();
            }
        }
    }, [listenAccount, deviceKey]);

    useEffect(() => {
        if (partnerProfile) {
            getDeviceKeyOnChange(partnerProfile?.account?.id, (account) => {
                setListenAccount(account);
            });
        }
    }, []);

    const handleLogOut = props.route.params.handleLogOut;
    return (
        <Drawer.Navigator
            initialRouteName="HOME_DRAWER"
            drawerContent={
                props => (<ProfileDrawerContent {...props} handleLogOut={handleLogOut} />)
            }
            drawerContentOptions={{
                labelStyle: {
                    fontSize: HEADER_FONT_SIZE,
                    fontWeight: "bold",
                    marginTop: 0
                },
                activeTintColor: "#ffff",
                activeBackgroundColor: BACKGROUND_COLOR,

            }}
            drawerStyle={{
                backgroundColor: "#fff",
                width: 500,


            }}
        >
            <Drawer.Screen
                initialParams={{ handleLogOut }}
                options={{
                    title: "TRANG CHỦ",
                }}
                name="HOME_DRAWER"
                component={HomeStackScreen}
            />
            <Drawer.Screen
                initialParams={{ handleLogOut }}
                options={{
                    title: "QUẢN LÝ ĐƠN HÀNG",
                }}
                name="ORDER_MANAGEMENT"
                component={OrderStatisticScreen} />
            <Drawer.Screen
                initialParams={{ handleLogOut }}
                options={{
                    title: "DANH MỤC",
                }}
                name="ITEM_CATALOG"
                component={ItemCatalogStackScreen} />
            <Drawer.Screen
                name="CONTACT_US"
                initialParams={{ handleLogOut }}
                component={ContactUsStackScreen}
                options={{
                    title: "VỀ CHÚNG TÔI",

                }}
            />


        </Drawer.Navigator>
    );
};

export default MenuDrawer;