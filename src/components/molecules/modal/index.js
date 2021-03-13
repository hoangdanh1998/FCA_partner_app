import { Body } from 'native-base';
import React from 'react';
import { FlatList, Modal, Text, TouchableHighlight, View } from 'react-native';
import { useSelector } from 'react-redux';
import NewOrderCard from '../../molecules/card-new-order/index';
import { styles } from './style';

export default InitOrderModal = (props) => {

    const { visible, handleAcceptAllOrder } = props;
    const listInitOrder = useSelector(state => state.orderList.listInitOrder);


    return (
        <View style={[styles.centeredView, styles.containerView]}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
            >
                <View style={[styles.centeredView, styles.containerView]}>
                    <View style={styles.modalView}>
                        <View style={{ marginBottom: 10 }}>
                            <Text style={[styles.boldText, { fontSize: 30 }]}>Xác Nhận Đơn Hàng</Text>
                        </View>
                        <FlatList
                            data={listInitOrder}
                            style={{ marginBottom: 15 }}
                            keyExtractor={order => order.id}
                            renderItem={({ item }) => (
                                <NewOrderCard order={item} />
                            )
                            }
                        />
                        {listInitOrder.length > 1 ? (
                            <Body style={[styles.buttonBody, { marginTop: 18 }]}>

                                <TouchableHighlight
                                    onPress={() => { handleAcceptAllOrder(listInitOrder) }}
                                    underlayColor={"#D5E8D4"}
                                    activeOpacity={0.9}
                                    style={styles.button}
                                >
                                    <Text style={[styles.text, styles.textButton, styles.boldText]}>
                                        Tiếp nhận tất cả
                            </Text>
                                </TouchableHighlight>
                            </Body>) : null}
                    </View>
                </View>
            </Modal>
        </View >
    )
}