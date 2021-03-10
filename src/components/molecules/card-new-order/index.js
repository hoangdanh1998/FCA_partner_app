import { Body, Card, CardItem, Content } from 'native-base';
import React from 'react';
import { FlatList, Text, TouchableHighlight, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { setOrderStatus } from '../../../redux/actions/order-list';
import {OrderStatus} from '../../../constance/constance';
import CountdownTimer from '../../atoms/timer/timer';
import { styles } from './style';


const NewOrderCard = (props) => {

    const order = props.order;
    dispatch = useDispatch();

    const handleRejectOrder = () => {
        console.log('handle reject')
        dispatch(setOrderStatus(order.id, OrderStatus.REJECTION));
    }

    const handleAcceptOrder = async () => {
        console.log('handle accept')
        dispatch(setOrderStatus(order.id, OrderStatus.ACCEPTANCE));
    }

    return (
        <Content style={[styles.container]} >
            <Card style={{ width: "100%", flexDirection: "row", justifyContent: "space-evenly" }}>
                <CardItem style={{ flex: 2 }}>
                    <CountdownTimer modalVisible={props.visible} onComplete={handleAcceptOrder} />
                </CardItem>
                <CardItem style={{ flex: 6 }}>
                    <Body style={{ alignItems: "center" }}>
                        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", height: "20%" }}>
                            <Text style={styles.text}>
                                Bạn có một đơn hàng mới từ
                            </Text>
                            <Text style={[styles.text, styles.boldText, { marginLeft: 5 }]}>
                                {order.customer.account?.phone}
                            </Text>
                        </View>
                        <FlatList
                            data={order.items}
                            keyExtractor={item => item.id}
                            style={{ width: "100%" }}
                            renderItem={({ item }) => (
                                <View style={{ flexDirection: "row", justifyContent: "space-around", width: "100%", marginVertical: 5, }}>
                                    <Text style={[styles.text, styles.borderItem, { width: "60%" }]}>{item.name}</Text>
                                    <Text style={[styles.text, { ...styles.borderItem, width: "10%", textAlign: "center" }]}>{item.quantity}</Text>
                                </View>
                            )}
                        />
                    </Body>
                </CardItem>
                <CardItem style={{ flex: 2 }}>
                    <TouchableHighlight
                        style={{ ...styles.button, backgroundColor: "#B85450", marginRight: 5 }}
                        onPress={() => {
                            handleRejectOrder()
                        }}
                        underlayColor={"#F8CECC"}
                        activeOpacity={0.9}
                    >
                        <Text style={[styles.text, styles.textButton, styles.boldText]}>
                            Từ chối
                            </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => { handleAcceptOrder() }}
                        underlayColor={"#D5E8D4"}
                        activeOpacity={0.9}
                        style={styles.button}
                    >
                        <Text style={[styles.text, styles.textButton, styles.boldText]}>
                            Tiếp nhận
                            </Text>
                    </TouchableHighlight>
                </CardItem>
            </Card>
        </Content>
    )
}

export default NewOrderCard;