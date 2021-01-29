import React, { useState } from "react";
import {
    Alert,
    Modal,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from "react-native";
import { Body, Button, Card, CardItem, Container, Left, List, Right } from 'native-base'
import { styles } from './style'
import CountdownTimer from '../../atoms/timer/timer'
import { TouchableOpacity } from "react-native-gesture-handler";

const NewOrderModal = (props) => {

    const newOrder = props.newOrder;

    return (
        <View style={[styles.centeredView, styles.containerView]}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={props.modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}

            >
                <View style={[styles.centeredView, styles.containerView]}>
                    <View style={styles.modalView}>
                        <CountdownTimer 
                            modalVisible={props.modalVisible}
                            changeModalVisible={props.changeModalVisible}
                        />
                        <View style={{ flexDirection:"row", justifyContent:"center", alignItems:"center", height: "20%"}}>
                            <Text
                                style={styles.text}
                            >
                                You have new order from customer 
                            </Text>
                        <Text
                                style={[styles.text, styles.boldText, {marginLeft:5}]}  
                            >
                                {newOrder.phone}
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
                        {/* <TouchableHighlight
                            style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                            onPress={() => {
                                { props.changeModalVisible(!props.modalVisible) };
                            }}
                        >
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </TouchableHighlight> */}
                        <Body style={[styles.buttonBody,{marginTop:18}]}>
                            <TouchableHighlight
                                style={{...styles.button, backgroundColor:"#B85450"}}
                                onPress={() => {
                                    { props.changeModalVisible(!props.modalVisible) };
                                }}
                                underlayColor={"#F8CECC"}
                                activeOpacity={0.9}
                            >
                                <Text style={[styles.text, styles.textButton, styles.boldText]}>
                                    Reject
                            </Text>
                            </TouchableHighlight>
                            <TouchableHighlight
                                onPress={() => {
                                    { props.changeModalVisible(!props.modalVisible) };
                                }}
                                underlayColor={"#D5E8D4"}
                                activeOpacity={0.9}
                                style={styles.button}
                            >
                                <Text style={[styles.text, styles.textButton, styles.boldText]}>
                                    Accept
                            </Text>
                            </TouchableHighlight>
                        </Body>

                    </View>
                </View>
            </Modal>

            <TouchableHighlight
                style={styles.openButton}
                onPress={() => {
                    props.changeModalVisible(true);

                }}
            >
                <Text style={styles.textStyle}>Show Modal</Text>
            </TouchableHighlight>
        </View>
    );
};



export default NewOrderModal;