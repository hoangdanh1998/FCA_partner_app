import { Card, CardItem, List } from 'native-base';
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { PRIMARY_COLOR, OrderStatus } from '../../../constance/constance';
import { styles } from './style';

export default function CartReportDetails(props) {
    const order = props.item;
    const selectedOrder = props.selectedOrder;
    const [orderStatus, setOrderStatus] = useState("");

    const handleSetStatus = () => {
        if (order) {
            switch (order.status) {
                case OrderStatus.ACCEPTANCE:
                    setOrderStatus("Chấp nhận");
                    break;
                case OrderStatus.CANCELLATION:
                    setOrderStatus("Huỷ");
                    break;
                case OrderStatus.ARRIVAL:
                    setOrderStatus("Đến nơi");
                    break;
                case OrderStatus.CLOSURE:
                    setOrderStatus("Hoàn tất");
                    break;
                case OrderStatus.PREPARATION:
                    setOrderStatus("Đang pha chế");
                    break;
                case OrderStatus.RECEPTION:
                    setOrderStatus("Đã nhận hàng");
                    break;
                case OrderStatus.REJECTION:
                    setOrderStatus("Từ chối");
                    break;
                case OrderStatus.READINESS:
                    setOrderStatus("Sẵn sàng");
                    break;

                default:
                    break;
            }
        }
    }

    useEffect(() => {
        handleSetStatus();
    }, [order]);

    return (
        <Card style={{ width: "100%", alignSelf: "center" }}>
            {console.log(selectedOrder.id)}
            {console.log("Order id", order.id)}
            <CardItem
                style={
                    selectedOrder?.id == order?.id
                        ? { backgroundColor: PRIMARY_COLOR }
                        : { backgroundColor: "#fff" }
                }
            >
                <View style={[styles.rowContainer,]}>

                    <Text
                        style={[
                            styles.title, styles.titleBold,
                            styles.flex1
                        ]}>
                        {order?.customer?.phone}
                    </Text>
                    <Text style={[styles.title, styles.flex1, { textAlign: "center" }]}>
                        {orderStatus}
                    </Text>
                    <Text style={styles.flex1}></Text>

                </View>

            </CardItem>
            <List
                dataArray={order?.items}
                keyExtractor={(item) => item?.id}
                renderRow={(item) => (
                    <CardItem
                        style={
                            selectedOrder?.id == order?.id
                                ? { backgroundColor: PRIMARY_COLOR }
                                : { backgroundColor: "#fff" }
                        }
                    >
                        <View style={[styles.rowContainer]}>

                            <Text style={[styles.title, styles.flex1]}>
                                {item?.name}
                            </Text>
                            <Text style={[styles.title, styles.flex1, { textAlign: "center" }]}>
                                {item?.quantity}
                            </Text>
                            <Text style={[styles.title, styles.flex1, { textAlign: "right" }]}>
                                {item?.price}
                            </Text>

                        </View>

                    </CardItem>
                )}
            />
            <CardItem
                style={
                    selectedOrder?.id == order?.id 
                    ? {backgroundColor: PRIMARY_COLOR}
                    : {backgroundColor:"#fff"}
                }
            >
                <View style={[styles.rowContainer]}>
                    <View style={[styles.rowContainer, styles.flex1]}>
                        <Text style={[styles.title, styles.titleBold]}>
                            Tổng cộng
                    </Text>
                        <Text style={styles.flex1}>

                        </Text>
                        <Text style={[styles.title, styles.flex1, styles.titleBold, { textAlign: "right" }]}>
                            {order?.total}
                        </Text>
                    </View>
                </View>

            </CardItem>
        </Card>
    )
}
