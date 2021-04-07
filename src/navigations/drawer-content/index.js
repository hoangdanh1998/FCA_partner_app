import React, { useState } from 'react'
import { Text, View } from 'react-native'
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import { BACKGROUND_COLOR, HEADER_FONT_SIZE, LIGHT_COLOR } from '../../constance/constance';
import ProfileContentDrawer from '../../components/atoms/profile-drawer/index'
import { useDispatch, useSelector } from 'react-redux';
import AwesomeAlert from 'react-native-awesome-alerts';
import { styles } from './style';
import { openStore } from '../../redux/actions/account'
import moment from 'moment';


export default function ProfileDrawerContent(props) {
    const dispatch = useDispatch();
    const handleLogOut = props.handleLogOut;
    const partner = useSelector(state => state.account.partner);
    // console.log("is open", partner?.isOpen);
    const [isShowAlert, setIsShowAlert] = useState(false);
    const [isShowFailAlert, setIsShowFailAlert] = useState(false);
    const [alertMessageFail, setAlertMessageFail] = useState();
    const [alertMessage, setAlertMessage] = useState();
    const filterToDoList = useSelector(state => state.orderList.filterToDoList);
    const filterDoingList = useSelector(state => state.orderList.filterDoingList);
    const filterReadyList = useSelector(state => state.orderList.filterReadyList);
    const filterArrivalList = useSelector(state => state.orderList.filterArrivalList);

    let expirationDate = moment(partner.expirationDate).format('DD-MM-YYYY');
    let currentDate = moment().format('DD-MM-YYYY');


    const handleOpenStore = async () => {
        if (partner) {
            try {
                if (partner.isOpen) {
                    dispatch(openStore(partner.id, false));
                } else {
                    // console.log("open store");
                    dispatch(openStore(partner.id, true));
                }
            } catch (error) {
                console.error("err open:", error);
            }

        }
    }

    return (

        <View style={{ flex: 1 }}>
            <AwesomeAlert
                show={isShowFailAlert}
                showProgress={false}
                title="Thông báo"
                message={alertMessageFail}
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showConfirmButton={true}
                titleStyle={[styles.titleAlert, styles.boldText]}
                messageStyle={[styles.title_font_size]}
                confirmText="OK"
                confirmButtonColor="#DD6B55"
                onConfirmPressed={() => {
                    setIsShowFailAlert(false);
                }}
                onDismiss={() => {
                    setIsShowFailAlert(false);
                }}
                confirmButtonTextStyle={[styles.title_font_size, styles.boldText]}
            />
            <AwesomeAlert
                show={isShowAlert}
                showProgress={false}
                title="Xác Nhận"
                message={alertMessage}
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showCancelButton={true}
                cancelText="Huỷ"
                showConfirmButton={true}
                titleStyle={[styles.titleAlert, styles.boldText]}
                messageStyle={[styles.title_font_size]}
                confirmText="Đồng ý"
                confirmButtonColor="#DD6B55"
                onCancelPressed={() => {
                    setIsShowAlert(false);
                }}
                onConfirmPressed={
                    async () => {
                        setIsShowAlert(false);
                        handleOpenStore();
                    }
                }
                onDismiss={() => {
                    setIsShowAlert(false);
                }}
                confirmButtonTextStyle={[styles.title_font_size, styles.title_font_weight]}
                cancelButtonTextStyle={[styles.title_font_size, styles.title_font_weight]}
            />
            <DrawerContentScrollView {...props}>
                <DrawerItem
                    style={{ width: "100%", marginLeft: 0, marginTop: 0, backgroundColor: LIGHT_COLOR, }}
                    label={() => (<ProfileContentDrawer />)}
                    onPress={() => { }}
                />
                <DrawerItemList {...props} />
                <DrawerItem
                    label={() => (
                        partner?.isOpen ? (<Text
                            style={{
                                fontSize: HEADER_FONT_SIZE,
                                fontWeight: "bold",
                                // backgroundColor: "red",
                                color: "#696969",
                            }}
                        >ĐÓNG CỬA</Text>)
                            : (<Text
                                style={{
                                    fontSize: HEADER_FONT_SIZE,
                                    color: "#696969",

                                }}
                            >Mở cửa</Text>)
                    )}
                    onPress={() => {
                        if (partner.isOpen) {
                            if (filterToDoList.length == 0 && filterDoingList.length == 0
                                && filterReadyList.length == 0 && filterArrivalList.length == 0) {
                                setIsShowAlert(true);
                                console.log("dong duoc cua");
                                setAlertMessage("Bạn chắc chắn muốn đóng cửa hàng?")
                            } else {
                                console.log("con don hang chua hoan thanh");
                                setIsShowFailAlert(true);
                                setAlertMessageFail("Bạn còn đơn hàng chưa hoàn thành!");
                            }
                        }
                        else if (!partner.isOpen) {
                            if(moment(expirationDate).isSameOrAfter(currentDate)){
                                setIsShowAlert(true);
                                setAlertMessage("Bạn chắc chắn muốn mở cửa hàng?")
                            } else {
                                setIsShowFailAlert(true);
                                setAlertMessageFail("Gói bản quyền của bạn đã hết hạn, gia hạn để tiếp tục!");
                            }
                            
                        } 
                    }}
                />
                <DrawerItem
                    label={() => (<Text
                        style={{
                            fontSize: HEADER_FONT_SIZE,
                            color: "#696969",

                        }}
                    >Đăng xuất</Text>)}
                    // icon={() => (
                    //     <MaterialCommunity
                    //         name="logout"
                    //         color="#696969"
                    //         size={25}
                    //     />
                    // )}
                    onPress={() => handleLogOut()} />
            </DrawerContentScrollView>
        </View>



    );
}