import { ActivityIndicator, SegmentedControl } from '@ant-design/react-native';
import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    SafeAreaView,
    FlatList,
    TouchableOpacity
} from 'react-native';
import CartOrderDetails from '../../components/atoms/cart-order-details';
import CartReportDetails from '../../components/atoms/cart-report-detail';
import CustomDatePicker from '../../components/atoms/date-picker';
import { BACKGROUND_COLOR, HEADER_FONT_SIZE } from '../../constance/constance';
import { getFinishOrderByDate, getTroubleOrderByDay } from '../../redux/actions/order-list';
import { styles } from './style';
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment';


export default function TabReportDetails() {

    const dispatch = useDispatch();


    const [selectedOrder, setSelectedOrder] = useState();
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [isShowModal, setIsShowModal] = useState(false);
    const [selectIndex, setSelectIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const filterFinishOrderList = useSelector(state => state.orderList.filterFinishOrderList);
    const filterTroubleOrderList = useSelector(state => state.orderList.filterTroubleOrderList);

    const partner = useSelector(state => state.account.partner);

    const onChange = (e) => {
        setSelectIndex(e.nativeEvent.selectedSegmentIndex);
        // console.log(e.nativeEvent.selectedSegmentIndex);
    };

    // console.log("filterTroubleOrderList: ", filterTroubleOrderList);

    const renderOrder = () => {
        if (filterFinishOrderList && filterTroubleOrderList) {
            switch (selectIndex) {
                case 0:
                    if (filterFinishOrderList.length === 0 && filterTroubleOrderList.length === 0) {
                        return (<View style={{ flex: 1, alignItems: "center", justifyContent:"center" }}>
                            <Text style={{ alignSelf: "center", fontSize: HEADER_FONT_SIZE }}>
                                Không có đơn hàng nào
                            </Text>
                        </View>)
                    }

                    else {
                        const allList = [...filterFinishOrderList, ...filterTroubleOrderList];
                        // console.log("allList: ", allList);
                        return (
                            <FlatList
                                style={{ flex: 1, }}
                                data={allList}
                                horizontal={false}
                                // numColumns = {5}
                                renderItem={({ item }) => (
                                    <TouchableOpacity
                                        style={{ width: "90%", alignSelf: "center" }}
                                        onPress={
                                            () => {
                                                setSelectedOrder(item);
                                                setIsShowModal(true);
                                            }
                                        }
                                    >
                                        <CartReportDetails
                                            item={item}
                                            selectedOrder={selectedOrder}
                                        />
                                    </TouchableOpacity>
                                )}
                            />
                        )
                    }


                case 1:
                    if (filterFinishOrderList.length === 0) {
                        return (<View style={{ flex: 1, alignItems: "center", justifyContent: "center"}}>
                            <Text style={{ alignSelf: "center", fontSize: HEADER_FONT_SIZE }}>
                                Không có đơn hàng nào
                            </Text>
                        </View>)
                    }
                    else {
                        return (
                            <FlatList
                                style={{ flex: 1, }}
                                data={filterFinishOrderList}
                                horizontal={false}
                                // numColumns = {5}
                                renderItem={({ item }) => (
                                    <TouchableOpacity
                                        style={{ width: "90%", alignSelf: "center" }}
                                        onPress={
                                            () => {
                                                setSelectedOrder(item);
                                                setIsShowModal(true);
                                            }
                                        }
                                    >
                                        <CartReportDetails
                                            item={item}
                                            selectedOrder={selectedOrder}
                                        />
                                    </TouchableOpacity>
                                )}
                            />
                        )
                    }

                case 2: {
                    if (filterTroubleOrderList.length === 0) {
                        return (<View style={{ flex: 1, alignItems: "center", justifyContent:"center" }}>
                            <Text style={{ alignSelf: "center", fontSize: HEADER_FONT_SIZE }}>
                                Không có đơn hàng nào
                            </Text>
                        </View>)
                    }

                    else {
                        return (
                            <FlatList
                                style={{ flex: 1, }}
                                data={filterTroubleOrderList}
                                horizontal={false}
                                // numColumns = {5}
                                renderItem={({ item }) => (
                                    <TouchableOpacity
                                        style={{ width: "90%", alignSelf: "center" }}
                                        onPress={
                                            () => {
                                                setSelectedOrder(item);
                                                setIsShowModal(true);
                                            }
                                        }
                                    >
                                        <CartReportDetails
                                            item={item}
                                            selectedOrder={selectedOrder}
                                        />
                                    </TouchableOpacity>
                                )}
                            />
                        )
                    }
                }


                default:
                    break;
            }
        }
    }

    const handleFilterOrderList = async () => {
        try {
            setIsLoading(true);
            switch (selectIndex) {

                case 0:
                    await dispatch(getFinishOrderByDate(partner?.id, moment(selectedDate).format('YYYY-MM-DD')));
                    await dispatch(getTroubleOrderByDay(partner?.id, moment(selectedDate).format('YYYY-MM-DD')));

                    break;
                case 1:
                    await dispatch(getFinishOrderByDate(partner?.id, moment(selectedDate).format('YYYY-MM-DD')));
                    console.log("get filterFinishOrderList");
                    break;
                case 2:
                    await dispatch(getTroubleOrderByDay(partner?.id, moment(selectedDate).format('YYYY-MM-DD')));
                    console.log("get filterTroubleOrderList");
                    break;

                default:
                    break;
            }
        } catch (error) {
            console.log("error get report order list: ", error);
        }
        setIsLoading(false)
    }

    useEffect(() => {
        handleFilterOrderList();
    }, [selectedDate, selectIndex])



    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <CartOrderDetails
                isShowModal={isShowModal}
                setIsShowModal={setIsShowModal}
                order={selectedOrder}
            />
            <View style={[styles.rowContainer, { marginVertical: 20, justifyContent: "space-evenly" }]}>
                <SegmentedControl
                    values={[
                        <Text style={{ fontSize: HEADER_FONT_SIZE }}>Tất cả</Text>,
                        <Text style={{ fontSize: HEADER_FONT_SIZE }}>Hoàn tất</Text>,
                        <Text style={{ fontSize: HEADER_FONT_SIZE }}>Sự cố</Text>,
                    ]}
                    tintColor={BACKGROUND_COLOR}
                    style={{ height: 45, width: 320, }}
                    onChange={onChange}
                />

                <CustomDatePicker value={selectedDate} setDate={setSelectedDate} />

            </View>

            {
                isLoading
                    ? (
                        <View style={styles.centered}>
                            <ActivityIndicator size="large" color={BACKGROUND_COLOR} />
                        </View>
                    )
                    : renderOrder()

            }



            {/* <View
                    style={{ flex: 1 }}
                >
                    <CartOrderDetails
                        order={selectedOrder}
                    />
                </View> */}

        </View>

    )
}
