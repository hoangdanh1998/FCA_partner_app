import React from 'react';
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
import { SafeAreaView } from 'react-native';
import { styles } from './style';

export default OrderCardReady = (props) => {
    var order = props.order;

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
                    {/* <Text
                            style={
                                order.estTime <= 10
                                    ? styles.lateEstimation
                                    : styles.earlyEstimation
                            }
                        >
                            {order.estTime} mins
                    </Text> */}
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
                            rounded>
                            <Text>Gửi mã QR</Text>
                        </Button>
                    </Right>
                </CardItem>
            </Card>
        </Content>
    );

}