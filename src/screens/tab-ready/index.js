import { useIsFocused } from '@react-navigation/native';
import { View } from 'native-base';
import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from '../../components/atoms/search-bar/search-bar';
import TabReady from '../../components/organisms/tab-ready/tab-ready';
import { EMPTY_LIST_MESSAGE, OrderStatus, PRIMARY_COLOR } from '../../constance/constance';
import { getOrderAfterUpdate, getReadinessOrderToday, setOrderStatus, updateListApterChangeStatus } from '../../redux/actions/order-list';
import { styles } from './style';
import AwesomeAlert from 'react-native-awesome-alerts';


const TabReadyScreen = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [searchList, setSearchList] = useState([])
    const [error, setError] = useState();
    const [isShowAlert, setIsShowAlert] = useState(false);
    const [titleAlert, setTitleAlert] = useState();

    const readyList = useSelector(state => state.orderList.filterReadyList);
    const isFocused = useIsFocused();
    const dispatch = useDispatch();

    if (isFocused) {
        dispatch(getOrderAfterUpdate(OrderStatus.READINESS));
    }

    const showAlert = () => {
        // console.log("hien alert len");
        setIsShowAlert(true);
    };

    const hideAlert = () => {
        setIsShowAlert(false);
    };

    const handleUpdateStatus = async (status, order) => {
        try {
            switch (status) {
                case OrderStatus.ARRIVAL:
                    dispatch(setOrderStatus(order.id, OrderStatus.ARRIVAL));
                    break;
                case OrderStatus.CANCELLATION: {
                    try {
                        dispatch(updateListApterChangeStatus(order.id, status));
                        showAlert();
                        setTitleAlert(`Đơn hàng của ${order.customer.account.phone}`)
                        if (realtimeStatus === OrderStatus.CANCELLATION) {
                            setAlertMessage(
                                `Đã được nhân viên huỷ thành công`
                            )
                        } else if (realtimeStatus === OrderStatus.RECEPTION) {
                            setAlertMessage(
                                `Đã được nhân viên xác nhận thành công`
                            )
                        }
                    } catch (error) {
                        setTitleAlert(`Đơn hàng của ${order.customer.account.phone}`)
                        if (realtimeStatus === OrderStatus.CANCELLATION) {
                            setAlertMessage(
                                `Huỷ thất bại`
                            )
                        } else if (realtimeStatus === OrderStatus.RECEPTION) {
                            setAlertMessage(
                                `Xác nhận thất bại`
                            )
                        }
                    }

                    break;
                }
                default:
                    break;
            }

        } catch (error) {
            Toast.show({
                text: TOAST_FAIL_MESSAGE,
                buttonText: "OK",
                type: "warning"
            })
        }
    }


    const handelSearchReadyList = (phone) => {
        const resultList = readyList.filter((order) => {
            return order.customer.account.phone.search(phone) != -1;
        })

        setSearchList(resultList);
    }

    useEffect(() => {
        setSearchList(readyList);
    }, [dispatch, readyList]);


    if (readyList.length === 0) {
        return (
            <View style={{ flex: 1 }, styles.centered}>
                <Text style={styles.message}>{EMPTY_LIST_MESSAGE}</Text>
            </View>
        )
    }

    if (isLoading) {
        return (
            <View style={styles.centered}>
                <ActivityIndicator size="large" color={PRIMARY_COLOR} />
            </View>
        )
    };
    return (
        <View style={{ flex: 1, backgroundColor: "#ffff" }}>
            <AwesomeAlert
                show={isShowAlert}
                showProgress={false}
                title={titleAlert}
                message={alertMessage}
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showConfirmButton={true}
                titleStyle={[styles.titleAlert, styles.boldText]}
                messageStyle={[styles.title_font_size]}
                confirmText="OK"
                confirmButtonColor="#DD6B55"
                onConfirmPressed={() => {
                    hideAlert();
                }}
                confirmButtonTextStyle={[styles.title_font_size, styles.boldText]}
            />
            <SearchBar handelSearchReadyList={handelSearchReadyList} />
            <TabReady toDoOrderList={searchList} handleUpdateStatus={handleUpdateStatus} />
        </View>
    );
}
export default TabReadyScreen;

