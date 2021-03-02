import { Body, Card, CardItem, Content, Left } from 'native-base';
import React from 'react'
import { View, Text, FlatList, TouchableHighlight } from 'react-native';
import CountdownTimer from '../timer/timer';
import { styles } from './style'


const NewOrderCard = (props) => {

    console.log("props new order modal", props.order);
    const order = props.order

    return (
        <Content style={[styles.container]} >
            <Card style={{ width: "100%", flexDirection: "row", justifyContent: "space-evenly" }}>
                <CardItem style={{ flex: 1 }}>
                    <CountdownTimer modalVisible={props.visible} />
                </CardItem>
                <CardItem style={{ flex: 4 }}>
                    <Body style={{ alignItems: "center" }}>
                        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", height: "20%" }}>
                            <Text
                                style={styles.text}
                            >
                                Bạn có một đơn hàng mới từ
                            </Text>
                            <Text
                                style={[styles.text, styles.boldText, { marginLeft: 5 }]}
                            >
                                {order.customer?.phone}
                            </Text>
                        </View>
                        <FlatList
                            data={order.items}
                            keyExtractor={item => item.id}
                            style={{  width: "100%" }}
                            renderItem={({ item }) => (
                                <View style={{ flexDirection: "row", justifyContent: "space-around", width: "100%", marginVertical: 5,}}>
                                    <Text style={[styles.text, styles.borderItem, { width: "60%"}]}>{item.name}</Text>
                                    <Text style={[styles.text, {...styles.borderItem, width:"10%", textAlign: "center"}]}>{item.quantity}</Text>
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