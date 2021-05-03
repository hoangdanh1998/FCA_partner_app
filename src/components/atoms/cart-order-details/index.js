import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { styles } from './style';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { BACKGROUND_COLOR, ButtonColor, HEADER_FONT_SIZE, LIGHT_COLOR, OrderStatus, PRIMARY_COLOR } from '../../../constance/constance';
import AntDesign from 'react-native-vector-icons/AntDesign'
import AwesomeAlert from 'react-native-awesome-alerts';
import Timeline from "react-native-timeline-flatlist";
import TimelineTransaction from '../time-line-transactions';
import moment from 'moment'
import NumberFormat from 'react-number-format';
import { Card, CardItem, List } from 'native-base';
import {blockCustomer} from '../../../redux/actions/account';
import {useDispatch, useSelector} from 'react-redux';
import { set } from 'react-native-reanimated';

export default function CartOrderDetails(props) {

    const dispatch = useDispatch();
    const partner = useSelector(state => state.account.partner);
    const bannedCustomers = useSelector(state => state.account.bannedCustomers);

    const { isShowModal, setIsShowModal, order } = props;

    const [orderStatus, setOrderStatus] = useState("");
    const [isShowAlert, setIsShowAlert] = useState(false);
    const [description, setDescription] = useState("");
    const [isBanner, setIsBanner] = useState();
    const [message, setMessage] = useState("");
    

    const handleSetStatus = (status) => {
        if (order) {
            switch (status) {
                case OrderStatus.ACCEPTANCE:
                    return ("Chấp nhận");

                case OrderStatus.CANCELLATION:
                    return ("Huỷ");

                case OrderStatus.ARRIVAL:
                    return ("Đến nơi");

                case OrderStatus.CLOSURE:
                    return ("Hoàn tất");

                case OrderStatus.PREPARATION:
                    return ("Đang pha chế");

                case OrderStatus.RECEPTION:
                    return ("Đã nhận hàng");

                case OrderStatus.REJECTION:
                    return ("Từ chối");

                case OrderStatus.READINESS:
                    return ("Sẵn sàng");
                case OrderStatus.INITIALIZATION:
                    return ("Mới");
                case OrderStatus.WAITING: 
                return ("Đợi")

                default:
                    break;
            }
        }
    }

    const checkIsBanner = () => {
        console.log(123);
        if (bannedCustomers) {
            
            const index = bannedCustomers.findIndex(customer => {
                return customer.id === order?.customer?.id;
            });
            if (index > -1) {
                setIsBanner(false);
                setMessage(`Bạn chắc muốn bỏ chặn khách hàng ${order?.customer?.phone}\nNếu bỏ chặn, khách hàng này có thể đặt hàng với cửa hàng của bạn`);
                console.log("chan");
            } else {
                setIsBanner(true);
                setMessage(`Bạn chắc chắn muốn chặn khách hàng ${order?.customer?.phone}\nNếu chặn, khách hàng này không thể đặt hàng với cửa hàng của bạn`);
            }
        }
        
    }
    useEffect(() => {
        checkIsBanner();
    }, [isBanner, bannedCustomers, order])

    const handleChangeDescription = () => {
        if (order) {
            if (order?.status == OrderStatus.CANCELLATION) {
                order?.transaction.forEach((item) => {
                    if (item?.toStatus == OrderStatus.CANCELLATION) {
                        setDescription(item?.description);
                    }
                })
            }
        }
    }

    useEffect(() => {
        handleChangeDescription();
    }, [order])
    const convertTransaction = () => {
        const transaction = order?.transaction?.sort((a, b) => {
            return (
                new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime() < 0
            );
        });
        const result = transaction?.map((transaction) => {
            const status = handleSetStatus(transaction.toStatus);
            return {
                time: moment(transaction.createdAt).format("HH:mm"),
                title: status,
                // description: 
                //     `status-${transaction.toStatus.toLowerCase()}-message`

            };
        });

        return result;
    };

    const showAlert = () => {
        setIsShowAlert(true);
    };

    const hideAlert = () => {
        setIsShowAlert(false);
    };

    return (
        // <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Modal
            visible={isShowModal}
            animationType="slide"
            transparent={true}
        >
            <AwesomeAlert
                show={isShowAlert}
                showProgress={false}
                title="Xác nhận"
                message={message}
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showCancelButton={true}
                showConfirmButton={true}
                cancelText="Huỷ"
                titleStyle={[styles.titleAlert, styles.boldTitle]}
                messageStyle={{ fontSize: HEADER_FONT_SIZE }}
                confirmText="Đồng ý"
                confirmButtonColor={ButtonColor.REJECTION}
                onCancelPressed={
                    () => {
                        hideAlert();
                    }
                }
                onDismiss={() => {
                    hideAlert();
                }}
                onConfirmPressed={
                    async () => {
                    await dispatch(blockCustomer(partner?.id,order?.customer?.id, isBanner));
                    hideAlert();
                }}
                confirmButtonTextStyle={[styles.title_font_size, styles.boldTitle]}
                cancelButtonTextStyle={[styles.title_font_size, styles.boldTitle,]}
            />
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <View style={{ height: "90%", backgroundColor: PRIMARY_COLOR, width: "95%", alignSelf: "center", }}>
                    <TouchableOpacity
                        style={{ alignSelf: "flex-end" }}
                        onPress={() => setIsShowModal(false)}
                    >
                        <AntDesign
                            name="closesquareo"
                            size={40}
                            color={ButtonColor.REJECTION}
                        />
                    </TouchableOpacity>

                    <View style={[styles.rowContainer, { marginHorizontal: 10, marginTop: 20 }]}>
                        <View style={[styles.flex1, { paddingHorizontal: 10, marginRight: 30 }]}>
                            <Text style={[styles.title, styles.boldTitle]}>
                                Thông tin khách hàng
                    </Text>
                            <View style={[styles.rowContainer]}>
                                <Text style={[styles.title, styles.leftTitle]}>
                                    Tên
                        </Text >
                                <Text style={[styles.title, styles.rightText]}>
                                    {order?.customer?.name}
                                </Text>

                            </View>
                            <View style={[styles.rowContainer]}>
                                <Text style={[styles.title, styles.leftTitle]}>
                                    Số điện thoại
                        </Text>
                                <Text style={[styles.title, styles.rightText]}>
                                    {order?.customer?.phone}
                                </Text>
                            </View>
                            <View style={{ alignItems: 'center', marginTop: 10 }}>
                                <TouchableOpacity
                                    style={[styles.blockButton]}
                                    onPress={
                                        () => {
                                            showAlert();
                                        }
                                    }
                                >
                                    <Text style={[styles.title, styles.boldTitle, { alignSelf: "center", color: "#fff" }]}>
                                        { isBanner ? "Chặn" : "Bỏ Chặn"}
                            </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        {
                            order?.status == OrderStatus.CANCELLATION
                                ? (<View style={[styles.flex1, { paddingHorizontal: 10, marginLeft: 30 }]}>
                                    <Text style={[styles.title, styles.boldTitle]}>
                                        Thông tin đơn hàng
                                    </Text>
                                    <View style={[styles.rowContainer]}>
                                        <Text style={[styles.title, { flex: 3 }]}>
                                            Lí do huỷ đơn
                                    </Text>
                                        <Text style={[styles.title, { flex: 5 }]}>
                                            {description}
                                        </Text>
                                    </View>
                                </View>
                                )
                                : (
                                    <View style={[styles.flex1, { paddingHorizontal: 10, marginLeft: 30 }]}>
                                        <Text style={[styles.title, styles.boldTitle]}>
                                            Thông tin đơn hàng
                                </Text>
                                        <View style={[styles.rowContainer]}>
                                            <Text style={[styles.title]}>
                                                Đánh giá
                                    </Text>
                                            {/* <Rating
                                                imageSize={22}
                                                readonly={true}
                                                // style={{ paddingVertical: 10 }}
                                                startingValue={3.5}
                                            />
                                        </View>
                                        <View style={[styles.rowContainer]}>
                                            <Text style={{ flex: 2 }}>

                                            </Text>
                                            <Text style={[styles.title, { flex: 5 }]}>
                                                Thức uống ngon, Đóng gói đẹp, Giá hợp lí
                                                Cho quán 5 sao luôn
                            </Text> */}
                                        </View>
                                    </View>

                                )
                        }
                    </View>
                    <View style={[
                        styles.flex1, styles.rowContainer,
                        { marginTop: "4%", marginBottom: "4%", paddingHorizontal: 20 }]}>
                        <View style={[{ flex: 1, borderWidth: 1, paddingTop: "2%", marginRight: 20 }]}>
                            <TimelineTransaction
                                transactions={convertTransaction()}
                            />
                        </View>
                        <View style={[styles.flex1,]}>
                            <View style={[styles.flex1, { borderWidth: 1, marginLeft: 20, paddingHorizontal: 10, paddingTop: "3%" }]}>
                                <Card>
                                    <List
                                        dataArray={order?.items}
                                        keyExtractor={(item) => item?.id}
                                        renderRow={(item) => (
                                            <CardItem
                                                style={[{ backgroundColor: PRIMARY_COLOR }]}
                                            >
                                                <View style={[styles.rowContainer, styles.flex1,]}>
                                                    <Text style={[styles.title, styles.flex1]}>
                                                        {item?.name}

                                                    </Text>
                                                    <Text style={[styles.title, styles.flex1, { textAlign: "center" }]}>
                                                        {item?.quantity}
                                                    </Text>
                                                    <NumberFormat
                                                        value={item?.price}
                                                        displayType={"text"}
                                                        thousandSeparator={true}
                                                        renderText={(formattedValue) => (
                                                            <Text style={[styles.title, styles.flex1, { textAlign: "right" }]}>
                                                                {formattedValue}
                                                            </Text>
                                                        )}
                                                    />

                                                </View>
                                            </CardItem>

                                        )}
                                    />
                                    <CardItem
                                        style={{ backgroundColor: PRIMARY_COLOR }}
                                    >
                                        <View style={[styles.rowContainer]}>
                                            <View style={[styles.rowContainer, styles.flex1]}>
                                                <Text style={[styles.title, styles.boldTitle]}>
                                                    Tổng cộng
                    </Text>
                                                <Text style={styles.flex1}>

                                                </Text>
                                                <NumberFormat
                                                    value={order?.total}
                                                    displayType={"text"}
                                                    thousandSeparator={true}
                                                    renderText={(formattedValue) => (
                                                        <Text style={[styles.title, styles.flex1, styles.boldTitle, { textAlign: "right" }]}>
                                                            {formattedValue}
                                                        </Text>
                                                    )}
                                                />
                                            </View>
                                        </View>
                                    </CardItem>
                                </Card>
                            </View>
                        </View>
                    </View>

                </View>

            </View>


        </Modal>
        // </View>

    )
}
