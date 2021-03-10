import { withNavigation } from '@react-navigation/compat';
import { Body, Button, Card, CardItem, Content, Left, List, Right, Text } from 'native-base';
import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { listenOrder } from '../../../firebase/firebase-realtime';
import { sendQRCode } from '../../../redux/actions/order-list';
import { styles } from './style';
import {OrderStatus} from '../../../constance/constance'

const OrderCardReady = (props) => {
    var order = props.order;
    const dispatch = useDispatch();
    const [timeRemain, setTimeRemain] = useState(0);
    useEffect(() => {
        (async () => {
            listenOrder(order.id, (orderListened) => {
                setTimeRemain(orderListened.timeRemain);
            })
        })();
    }, [])

    return (
        <Content padder>
            <Card style={styles.card}>
                <CardItem style={styles.cardHeader} header bordered>
                    <Left>
                        <Text style={[
                            styles.title_font_weight,
                            styles.title_font_size
                        ]}>{order.customer.account.phone}</Text>
                    </Left>
                    <Text
                            style={
                            timeRemain <= 10
                                    ? styles.lateEstimation
                                    : styles.earlyEstimation
                            }
                        >
                        {order.status == OrderStatus.ARRIVAL ? "" : `${timeRemain}`}
                    </Text>
                    <Right></Right>
                </CardItem>
                <CardItem style={styles.cardBody} body bordered>
                    <Left style={{flexDirection:"column"}}>
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
                                            <Text style={[styles.itemText,styles.title_font_weight]}>Tổng cộng</Text>
                                        </Left>
                                        <Right style={{ flexDirection: "row" }}>
                                            <Left>
                                                <Text></Text>
                                            </Left>
                                            <Right>
                                                <Text style={[styles.itemText,styles.title_font_weight]}>{order.total}</Text>
                                            </Right>
                                        </Right>
                                    </CardItem>
                        </Left>
                    </Left>

                    <Body style={styles.body_card_item}>
                        <CardItem
                            style={styles.body_card_item}
                        >
                            
                            <Right>
                                <Text style={[
                                    styles.status_order,
                                    styles.title_font_size
                                ]}>
                                    {order.status == "arrived" ? "đã đến" : ""}
                                </Text>
                            </Right>
                        </CardItem>
                    </Body>
                    <Right>
                        <Button
                            style={styles.button}
                            onPress={() => {
                                dispatch(sendQRCode(order.id));
                                props.navigation.navigate("QRCODE");
                            }}
                            rounded>
                            <Text>Gửi mã QR</Text>
                        </Button>
                    </Right>
                </CardItem>
            </Card>
        </Content>
    );

};

export default withNavigation(OrderCardReady);