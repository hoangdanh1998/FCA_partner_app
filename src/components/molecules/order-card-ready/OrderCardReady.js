import { withNavigation } from '@react-navigation/compat';
import { Body, Button, Card, CardItem, Content, Left, List, Right, Text } from 'native-base';
import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { OrderStatus, TimeRemainTo } from '../../../constance/constance';
import { listenOrder } from '../../../firebase/firebase-realtime';
import { sendQRCode } from '../../../redux/actions/order-list';
import { styles } from './style';


const OrderCardReady = (props) => {
    const {handleUpdateStatus} = props;
    let order = props.order;
    const [status, setStatus] = useState()
    const dispatch = useDispatch();
    const [timeRemain, setTimeRemain] = useState(0);
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
            handleUpdateStatus(OrderStatus.ARRIVAL, order.id);
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