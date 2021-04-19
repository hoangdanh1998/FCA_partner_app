import React, { useCallback } from "react";
import {
    Alert,
    Modal,
    Text,
    TouchableHighlight,
    View
} from "react-native";
import { Body, Card, CardItem, List } from 'native-base'
import { styles } from './style'
import CountdownTimer from '../../atoms/timer/timer'
import { useDispatch } from 'react-redux';
import { withNavigation } from '@react-navigation/compat'


const NewOrderModal = (props) => {
    const { newOrder, visible, handleAcceptOrder, handleRejectOrder } = props;
    // const modalVisibleState = useSelector(state => state.modalVisible.modalVisible);
    return (

        <View style={[styles.centeredView, styles.containerView]}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
                onRequestClose={() => {
                    // Alert.alert("Modal has been closed.");
                }}
            >
                {newOrder ? (<View style={[styles.centeredView, styles.containerView]}>
                    <View style={styles.modalView}>
                        <CountdownTimer 
                            modalVisible={visible}
                            onComplete={handleAcceptOrder}
                        />
                        <View style={{ flexDirection:"row", justifyContent:"center", alignItems:"center", height: "20%"}}>
                            <Text
                                style={styles.text}
                            >
                                Bạn có một đơn hàng mới từ 
                            </Text>
                        <Text
                                style={[styles.text, styles.boldText, {marginLeft:5}]}  
                            >
                                {newOrder?.customer?.account.phone}
                            </Text>
                        </View>          
                        <Card style={{width:"80%"}}>
                            <List
                                style={styles.cardWidth}
                                dataArray={newOrder.items}
                                renderRow={(element) => (
                                    <CardItem style={styles.buttonBody}>
                                            <Text style={[styles.text, styles.nameItemLayout]}
                                            >
                                                {element.name}
                                            </Text>
                                        
                                            <Text style={[styles.text]}>
                                                {element.quantity}
                                            </Text>
                                    </CardItem>
                                )}
                            >
                            </List>
                        </Card>
                        <Body style={[styles.buttonBody,{marginTop:18}]}>
                            <TouchableHighlight
                                style={{...styles.button, backgroundColor:"#B85450"}}
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
                        </Body>
                    </View>
                </View>
                ) : null}

            </Modal>
        </View>
    );
};



export default NewOrderModal;