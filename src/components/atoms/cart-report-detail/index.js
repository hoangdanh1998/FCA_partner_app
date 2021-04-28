import { Card, CardItem, List } from 'native-base';
import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { PRIMARY_COLOR, OrderStatus } from '../../../constance/constance';
import { styles } from './style';
import moment from 'moment';
import NumberFormat from 'react-number-format';
import { Text } from 'native-base';
import { useDispatch, useSelector } from 'react-redux'
import { getFinishOrderByDate } from '../../../redux/actions/order-list';

export default function CartReportDetails(props) {
    const order = props.item;
    const selectedOrder = props.selectedOrder;
    const [orderStatus, setOrderStatus] = useState("");

    const dispatch = useDispatch();

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
                        {order?.customer?.phone} - {order?.customer?.name}
                    </Text>
                    <Text style={[styles.title, styles.flex1, { textAlign: "center" }]}>
                        {orderStatus}
                    </Text>
                    <Text note style={[styles.flex1, styles.title, { textAlign: "right" }]}>
                        {moment(order?.createdAt).format("DD/MM/YYYY hh:mm")}
                    </Text>

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
                style={
                    selectedOrder?.id == order?.id
                        ? { backgroundColor: PRIMARY_COLOR }
                        : { backgroundColor: "#fff" }
                }
            >
                <View style={[styles.rowContainer]}>
                    <View style={[styles.rowContainer, styles.flex1]}>
                        <Text style={[styles.title, styles.titleBold]}>
                            Tổng cộng
                    </Text>
                        <Text style={styles.flex1}>

                        </Text>
                        <NumberFormat
                            value={order?.total}
                            displayType={"text"}
                            thousandSeparator={true}
                            renderText={(formattedValue) => (
                                <Text style={[styles.title, styles.flex1, styles.titleBold, { textAlign: "right" }]}>
                                    {formattedValue}
                                </Text>
                            )}
                        />
                    </View>
                </View>

            </CardItem>
        </Card>
    )
}
