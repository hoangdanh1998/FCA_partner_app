import React, { useState } from "react";
import {
    Container,
    Content,
    Text,
    Left,
    Body,
    Right,
    Button,
    Card,
    CardItem,
    List,
    Icon
} from 'native-base';
import {useDispatch} from 'react-redux';
import { styles } from './style';
import { sendQRCode } from '../../../redux/action/order-list';
import {withNavigation} from '@react-navigation/compat';
import { listenOrder } from '../../../firebase/realtime-database/listener';
import { useEffect } from 'react'

const OrderCardReady = (props) => {
    var order = props.order;
    const dispatch = useDispatch();
    const [timeRemain, setTimeRemain] = useState(0);
    useEffect(() => {
        (async () => {
            listenOrder(order.id, (timeRemain) => {
                setTimeRemain(timeRemain);
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
                        ]}>{order.customer.phone}</Text>
                    </Left>
                    <Text
                            style={
                            timeRemain <= 10
                                    ? styles.lateEstimation
                                    : styles.earlyEstimation
                            }
                        >
                        {timeRemain} mins
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