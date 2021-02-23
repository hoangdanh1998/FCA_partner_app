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
import {setModalVisible} from '../../../redux/action/modal';
import {useSelector, useDispatch} from 'react-redux';
import { setOrderStatus } from "../../../redux/action/order-list";
import { OrderStatus } from "../../../constance/constance";


const NewOrderModal = (props) => {

    const newOrder = props.newOrder;
    const modalVisibleState = useSelector(state => state.modalVisible.modalVisible);
    const dispatch = useDispatch();

    const handleAcceptOrder = () => {
        dispatch(setOrderStatus(newOrder.id, OrderStatus.ACCEPTANCE));
    }

    const modalVisibleHandler = () => {
        dispatch(setModalVisible());
    }



    return (
        <View style={[styles.centeredView, styles.containerView]}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisibleState}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}

            >
                <View style={[styles.centeredView, styles.containerView]}>
                    <View style={styles.modalView}>
                        <CountdownTimer 
                            modalVisible={modalVisibleState}
                            changeModalVisible={modalVisibleHandler}
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
                                {newOrder.customer.phone}
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
                                    modalVisibleHandler()
                                }}
                                underlayColor={"#F8CECC"}
                                activeOpacity={0.9}
                            >
                                <Text style={[styles.text, styles.textButton, styles.boldText]}>
                                    Từ chối
                            </Text>
                            </TouchableHighlight>
                            <TouchableHighlight
                                onPress={() => {
                                    handleAcceptOrder()
                                }}
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
            </Modal>

            {/* <TouchableHighlight
                style={styles.openButton}
                onPress={() => {
                    modalVisibleHandler()
                }}
            > 
                <Text style={styles.textStyle}>Show Modal</Text>
            </TouchableHighlight>*/}
        </View>
    );
};



export default NewOrderModal;