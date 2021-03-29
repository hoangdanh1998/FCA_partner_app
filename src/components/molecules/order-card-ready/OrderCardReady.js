import { withNavigation } from '@react-navigation/compat';
import { Alert, Linking } from 'react-native'
import { Body, Button, Card, CardItem, Content, Left, List, Right, Text } from 'native-base';
import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { BACKGROUND_COLOR, ButtonColor, OrderStatus, TimeRemainTo } from '../../../constance/constance';
import { listenOrder } from '../../../firebase/firebase-realtime';
import { sendQRCode, setOrderStatus } from '../../../redux/actions/order-list';
import { styles } from './style';
import AwesomeAlert from 'react-native-awesome-alerts';


const OrderCardReady = (props) => {
    const { handleUpdateStatus } = props;
    let order = props.order;
    const [status, setStatus] = useState()
    const dispatch = useDispatch();
    const [timeRemain, setTimeRemain] = useState(0);
    const [isShowAlert, setIsShowAlert] = useState(false);
    useEffect(() => {
        (async () => {
            listenOrder(order.id, (orderListened) => {
                if (orderListened.status === OrderStatus.ARRIVAL) {
                    setStatus(orderListened.status);
                }
                handleUpdateStatusWithTime(orderListened);
                setTimeRemain(orderListened.timeRemain);
            })
        })();
    }, [])

    const handleUpdateStatusWithTime = (orderListened) => {
        let tmpTimeRemain = orderListened.timeRemain + '';
        const arrTimeString = tmpTimeRemain.split(" ");
        const time = +arrTimeString[0];
        if (orderListened.status === OrderStatus.READINESS && time <= TimeRemainTo.ARRIVAL) {
            handleUpdateStatus(OrderStatus.ARRIVAL, order);
        } if (orderListened.status === OrderStatus.CANCELLATION
            || orderListened.status === OrderStatus.RECEPTION) {
            console.log("update order list");
            handleUpdateStatus(orderListened.status, order);
        }
    }

    const showAlert = () => {
        setIsShowAlert(true);
    };

    const hideAlert = () => {
        setIsShowAlert(false);
    };

    const makeCall = (numberPhone) => {
        let phoneNumber = `tel:${numberPhone}`;
        hideAlert();
        return Linking.openURL(phoneNumber);
    }

    const showModal = () => {



        Alert.alert(
            "Xác nhận",
            "Bạn chắc chắn muốn giao hàng?",
            [

                {
                    text: "Xác nhận",
                    onPress: async () => await dispatch(setOrderStatus(order.id, OrderStatus.RECEPTION)),

                },
                {
                    text: "Gọi điện",

                    onPress: () => {
                        console.log("OK Pressed");
                        makeCall("0364133838");
                    }
                }
            ]
        );

    };

    return (
        <Content padder>
            <AwesomeAlert
                show={isShowAlert}
                showProgress={false}
                title="Xác nhận"
                message="Bạn chắc chắn muốn giao hàng?"
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showCancelButton={true}
                showConfirmButton={true}
                cancelText="Xác nhận"
                titleStyle={[styles.titleAlert, styles.title_font_weight]}
                messageStyle={[styles.title_font_size]}
                confirmText="Gọi điện"
                confirmButtonColor={ButtonColor.ACCESSS}
                onCancelPressed={
                    async () => {
                        hideAlert();
                        await dispatch(setOrderStatus(order.id, OrderStatus.RECEPTION))

                    }
                }
                onDismiss={() => {
                    hideAlert();
                }}
                onConfirmPressed={() => {
                    makeCall("0364133838");
                }}
                confirmButtonTextStyle={[styles.title_font_size, styles.title_font_weight]}
                cancelButtonTextStyle={[styles.title_font_size, styles.title_font_weight]}
            />
            <Card style={styles.card}>
                <CardItem style={styles.cardHeader} header bordered>
                    <Left>
                        <Text style={[
                            styles.title_font_weight,
                            styles.title_font_size
                        ]}>{order.customer.account.phone}</Text>
                    </Left>
                    <Body>
                        <Text
                            style={[
                                styles.status_order,
                                styles.title_font_size
                            ]}
                        >
                            {status ? "đã đến" : timeRemain}
                        </Text>
                    </Body>



                </CardItem>
                <CardItem style={styles.cardBody} body bordered>
                    <Left style={{ flexDirection: "column", width: "100%" }}>
                        <Left style={styles.cardBody}>

                            <List
                                style={styles.list}
                                keyExtractor={order.items.id}
                                dataArray={order.items}
                                renderRow={(item) => (
                                    <CardItem>
                                        <Left>
                                            <Text style={styles.itemText}>{item.name}</Text>
                                        </Left>
                                        <Right style={{ flexDirection: "row" }}>
                                            <Left>
                                                <Text style={styles.itemText}>{item.quantity}</Text>
                                            </Left>
                                            <Right>
                                                <Text style={styles.itemText}>{item.price * item.quantity}</Text>
                                            </Right>
                                        </Right>
                                    </CardItem>
                                )}
                            />
                        </Left>
                        <Left style={styles.cardBody}>
                            <CardItem>
                                <Left>
                                    <Text style={[styles.itemText, styles.title_font_weight]}>Tổng cộng</Text>
                                </Left>
                                <Right style={{ flexDirection: "row" }}>
                                    <Left>
                                        <Text></Text>
                                    </Left>
                                    <Right>
                                        <Text style={[styles.itemText, styles.title_font_weight]}>{order.total}</Text>
                                    </Right>
                                </Right>
                            </CardItem>
                        </Left>
                    </Left>


                    <Right style={{ flexDirection: "row", justifyContent: "flex-end" }}>
                        <Button
                            style={{ borderColor: BACKGROUND_COLOR }}
                            onPress={showAlert}
                            bordered>
                            <Text style={{ color: BACKGROUND_COLOR }}>Giao hàng</Text>
                        </Button>
                        <Button
                            style={styles.button}
                            onPress={() => {
                                dispatch(sendQRCode(order.id));
                                props.navigation.navigate("QRCODE");
                            }}
                        >
                            <Text>Gửi mã QR</Text>
                        </Button>
                    </Right>
                </CardItem>
            </Card>
        </Content>
    );

};

export default withNavigation(OrderCardReady);