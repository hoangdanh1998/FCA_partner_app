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
                                ]}>{order.phone}</Text>
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
                        <Left>
                            <List
                                style={styles.list}
                                dataArray={order.items}
                                renderRow={(item) => (
                                    <CardItem>
                                        <Left>
                                            <Text style={styles.itemText}>{item.name}</Text>
                                        </Left>
                                        <Right>
                                            <Text style={styles.itemText}>{item.quantity}</Text>
                                        </Right>
                                    </CardItem>
                                )}
                            />
                            
                        </Left>
                        <Body style={styles.body_card_item}>
                            <CardItem
                                style={styles.body_card_item}
                            >
                                <Left>
                                    <Text
                                    style={[
                                        styles.title_font_size,
                                        styles.title_font_weight
                                    ]}
                                    
                                    >Total: 30000VND</Text>
                                </Left>
                                <Right>
                                    
                                    <Text style={[
                                        styles.status_order,
                                        styles.title_font_size
                                        ]}>
                                        {order.status == "arrived" ? order.status : ""}
                                    </Text>
                                </Right>
                            </CardItem>
                        </Body>
                        <Right>
                            <Button
                                style={styles.button}
                                rounded>
                                <Text>Send QR Code</Text>
                            </Button>
                        </Right>
                    </CardItem>
                </Card>
            </Content>
    );

}