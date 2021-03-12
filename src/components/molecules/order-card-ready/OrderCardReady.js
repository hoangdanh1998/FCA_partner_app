import { withNavigation } from '@react-navigation/compat';
import { Body, Button, Card, CardItem, Content, Left, List, Right, Text } from 'native-base';
import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { listenOrder } from '../../../firebase/firebase-realtime';
import { sendQRCode } from '../../../redux/actions/order-list';
import { styles } from './style';
import { OrderStatus, TimeRemainTo } from '../../../constance/constance';


const OrderCardReady = (props) => {
    const {handleUpdateStatus} = props;
    let order = props.order;
    const [statusOrder, setStatusOrder] = useState(order.status)
    const dispatch = useDispatch();
    const [timeRemain, setTimeRemain] = useState(0);
    useEffect(() => {
        (async () => {
            listenOrder(order.id, (orderListened) => {
                handleUpdateStatusWithTime(orderListened);
                setTimeRemain(orderListened.timeRemain);
                
            })
        })();
    }, [])

    const handleUpdateStatusWithTime = (orderListened) => {
        let tmpTimeRemain = orderListened.timeRemain;
        
        if (orderListened.status === OrderStatus.PREPARATION || orderListened.status === OrderStatus.READINESS) {
            tmpTimeRemain += "";
            const arrTimeString = tmpTimeRemain.split(" ");

            const time = parseInt(arrTimeString[0]);
            console.log("Time: ", time);
            if (time <= TimeRemainTo.ARRIVAL) {
                handleUpdateStatus(OrderStatus.READINESS, order.id);
                setStatusOrder(orderListened.status);
            }
        }

    }

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
                    <Body>
                        {order.status === OrderStatus.ARRIVAL
                            ? (<Text style={[
                                styles.status_order,
                                styles.title_font_size
                            ]}>
                                {order.status == OrderStatus.ARRIVAL ? "đã đến" : ""}
                            </Text>)
                            : <Text
                                style={
                                    timeRemain <= 10
                                        ? styles.lateEstimation
                                        : styles.earlyEstimation
                                }
                            >
                                {timeRemain}
                            </Text>
                        }
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
                                            <Text style={styles.itemText}>Trà sữa chân châu đường đen</Text>
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