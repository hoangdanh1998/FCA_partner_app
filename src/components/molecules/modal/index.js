import { Body } from 'native-base';
import React from 'react';
import { FlatList, Modal, Pressable, Text, TouchableHighlight, View } from 'react-native';
import { useSelector } from 'react-redux';
import NewOrderCard from '../../molecules/card-new-order/index';
import { styles } from './style';

export default InitOrderModal = (props) => {

    const { visible, setVisible } = props;
    const listInitOrder = useSelector(state => state.orderList.listInitOrder);

    const listOrder = [
        {
            "id": "3d30f064-d5b2-4c64-af3d-8b2f7bacafa2",
            "createdAt": "2021-02-24T17:03:39.583Z",
            "updatedAt": "2021-02-25T17:35:15.396Z",
            "deletedAt": null,
            "customer": {
                "id": "76babaeb-3a80-4c35-8695-0305083e88fd",
                "createdAt": "2021-02-05T03:53:58.725Z",
                "updatedAt": "2021-02-05T03:53:58.725Z",
                "deletedAt": null,
                "name": "Hoàng Danh",
                "phone": "03909899",
                "account": null
            },
            "partner": {
                "id": "1ceee651-7dea-4a0f-b517-b49166cb6cfb",
                "createdAt": "2021-02-05T08:42:44.411Z",
                "updatedAt": "2021-02-05T08:42:44.411Z",
                "deletedAt": null,
                "name": "Café Sân Thượng Phong Lan",
                "status": "APPROVED",
                "phone": null,
                "imageLink": "http://retaildesignblog.net/wp-content/uploads/2016/07/GENERAL-SUPPLY-store-and-cafe-Nagoya-Japan.jpg",
                "address": null,
                "account": null,
                "items": [],
                "requestItems": []
            },
            "status": "READINESS",
            "items": [
                {
                    "id": "f1f87914-5ca3-4ef7-83eb-2947f31d2fba",
                    "createdAt": "2021-02-25T17:03:39.632Z",
                    "updatedAt": "2021-02-25T17:03:39.632Z",
                    "deletedAt": null,
                    "name": "Cà phê đá",
                    "price": "30000",
                    "quantity": 1
                }
            ],
            "transaction": [
                {
                    "id": "c8c90d0e-2ba8-4e4f-b017-ec92f5fc72e9",
                    "createdAt": "2021-02-25T17:03:42.210Z",
                    "updatedAt": "2021-02-25T17:03:42.210Z",
                    "deletedAt": null,
                    "fromStatus": "INITIALIZATION",
                    "toStatus": "ACCEPTANCE",
                    "fault": null
                },
                {
                    "id": "b5d79298-1b0f-4c6c-88dc-858ce2cb5329",
                    "createdAt": "2021-02-25T17:27:58.098Z",
                    "updatedAt": "2021-02-25T17:27:58.098Z",
                    "deletedAt": null,
                    "fromStatus": "PREPARATION",
                    "toStatus": "PREPARATION",
                    "fault": null
                },
                {
                    "id": "50c5d221-5af8-4913-9560-42ef56152187",
                    "createdAt": "2021-02-25T17:35:15.437Z",
                    "updatedAt": "2021-02-25T17:35:15.437Z",
                    "deletedAt": null,
                    "fromStatus": "READINESS",
                    "toStatus": "READINESS",
                    "fault": null
                }
            ],
            "total": 30000
        },
        {
            "id": "219a55a3-a12f-4c7a-bab9-04524ad56729",
            "createdAt": "2021-02-24T17:27:01.359Z",
            "updatedAt": "2021-02-25T17:27:14.971Z",
            "deletedAt": null,
            "customer": {
                "id": "76babaeb-3a80-4c35-8695-0305083e88fd",
                "createdAt": "2021-02-05T03:53:58.725Z",
                "updatedAt": "2021-02-05T03:53:58.725Z",
                "deletedAt": null,
                "name": "Hoàng Danh",
                "phone": "03699800",
                "account": null
            },
            "partner": {
                "id": "1ceee651-7dea-4a0f-b517-b49166cb6cfb",
                "createdAt": "2021-02-05T08:42:44.411Z",
                "updatedAt": "2021-02-05T08:42:44.411Z",
                "deletedAt": null,
                "name": "Café Sân Thượng Phong Lan",
                "status": "APPROVED",
                "phone": null,
                "imageLink": "http://retaildesignblog.net/wp-content/uploads/2016/07/GENERAL-SUPPLY-store-and-cafe-Nagoya-Japan.jpg",
                "address": null,
                "account": null,
                "items": [],
                "requestItems": []
            },
            "status": "REJECTION",
            "items": [
                {
                    "id": "10ce5a6e-5178-4387-bee7-fee713cf03ff",
                    "createdAt": "2021-02-25T17:27:01.882Z",
                    "updatedAt": "2021-02-25T17:27:01.882Z",
                    "deletedAt": null,
                    "name": "Cà phê đá",
                    "price": "30000",
                    "quantity": 1
                },
                {
                    "id": "ee846edf-9558-404b-9dfc-be49bec36ab8",
                    "createdAt": "2021-02-25T17:27:01.681Z",
                    "updatedAt": "2021-02-25T17:27:01.681Z",
                    "deletedAt": null,
                    "name": "Cà phê sữa đá",
                    "price": "30000",
                    "quantity": 1
                }
            ],
            "transaction": [
                {
                    "id": "5d985e31-04e2-4e46-8ef4-ed0d7b1ca6f0",
                    "createdAt": "2021-02-25T17:27:15.023Z",
                    "updatedAt": "2021-02-25T17:27:15.023Z",
                    "deletedAt": null,
                    "fromStatus": "INITIALIZATION",
                    "toStatus": "REJECTION",
                    "fault": null
                }
            ],
            "total": 60000
        },

        // {
        //     "id": "219a55a3-a12f-4c7a-bab9-04524ad56729",
        //     "createdAt": "2021-02-24T17:27:01.359Z",
        //     "updatedAt": "2021-02-25T17:27:14.971Z",
        //     "deletedAt": null,
        //     "customer": {
        //         "id": "76babaeb-3a80-4c35-8695-0305083e88fd",
        //         "createdAt": "2021-02-05T03:53:58.725Z",
        //         "updatedAt": "2021-02-05T03:53:58.725Z",
        //         "deletedAt": null,
        //         "name": "Hoàng Danh",
        //         "phone": "03699800",
        //         "account": null
        //     },
        //     "partner": {
        //         "id": "1ceee651-7dea-4a0f-b517-b49166cb6cfb",
        //         "createdAt": "2021-02-05T08:42:44.411Z",
        //         "updatedAt": "2021-02-05T08:42:44.411Z",
        //         "deletedAt": null,
        //         "name": "Café Sân Thượng Phong Lan",
        //         "status": "APPROVED",
        //         "phone": null,
        //         "imageLink": "http://retaildesignblog.net/wp-content/uploads/2016/07/GENERAL-SUPPLY-store-and-cafe-Nagoya-Japan.jpg",
        //         "address": null,
        //         "account": null,
        //         "items": [],
        //         "requestItems": []
        //     },
        //     "status": "REJECTION",
        //     "items": [
        //         {
        //             "id": "10ce5a6e-5178-4387-bee7-fee713cf03ff",
        //             "createdAt": "2021-02-25T17:27:01.882Z",
        //             "updatedAt": "2021-02-25T17:27:01.882Z",
        //             "deletedAt": null,
        //             "name": "Cà phê đá",
        //             "price": "30000",
        //             "quantity": 1
        //         },
        //         {
        //             "id": "ee846edf-9558-404b-9dfc-be49bec36ab8",
        //             "createdAt": "2021-02-25T17:27:01.681Z",
        //             "updatedAt": "2021-02-25T17:27:01.681Z",
        //             "deletedAt": null,
        //             "name": "Cà phê sữa đá",
        //             "price": "30000",
        //             "quantity": 1
        //         }
        //     ],
        //     "transaction": [
        //         {
        //             "id": "5d985e31-04e2-4e46-8ef4-ed0d7b1ca6f0",
        //             "createdAt": "2021-02-25T17:27:15.023Z",
        //             "updatedAt": "2021-02-25T17:27:15.023Z",
        //             "deletedAt": null,
        //             "fromStatus": "INITIALIZATION",
        //             "toStatus": "REJECTION",
        //             "fault": null
        //         }
        //     ],
        //     "total": 60000
        // },
        // {
        //     "id": "219a55a3-a12f-4c7a-bab9-04524ad56729",
        //     "createdAt": "2021-02-24T17:27:01.359Z",
        //     "updatedAt": "2021-02-25T17:27:14.971Z",
        //     "deletedAt": null,
        //     "customer": {
        //         "id": "76babaeb-3a80-4c35-8695-0305083e88fd",
        //         "createdAt": "2021-02-05T03:53:58.725Z",
        //         "updatedAt": "2021-02-05T03:53:58.725Z",
        //         "deletedAt": null,
        //         "name": "Hoàng Danh",
        //         "phone": "03699800",
        //         "account": null
        //     },
        //     "partner": {
        //         "id": "1ceee651-7dea-4a0f-b517-b49166cb6cfb",
        //         "createdAt": "2021-02-05T08:42:44.411Z",
        //         "updatedAt": "2021-02-05T08:42:44.411Z",
        //         "deletedAt": null,
        //         "name": "Café Sân Thượng Phong Lan",
        //         "status": "APPROVED",
        //         "phone": null,
        //         "imageLink": "http://retaildesignblog.net/wp-content/uploads/2016/07/GENERAL-SUPPLY-store-and-cafe-Nagoya-Japan.jpg",
        //         "address": null,
        //         "account": null,
        //         "items": [],
        //         "requestItems": []
        //     },
        //     "status": "REJECTION",
        //     "items": [
        //         {
        //             "id": "10ce5a6e-5178-4387-bee7-fee713cf03ff",
        //             "createdAt": "2021-02-25T17:27:01.882Z",
        //             "updatedAt": "2021-02-25T17:27:01.882Z",
        //             "deletedAt": null,
        //             "name": "Cà phê đá",
        //             "price": "30000",
        //             "quantity": 1
        //         },
        //         {
        //             "id": "ee846edf-9558-404b-9dfc-be49bec36ab8",
        //             "createdAt": "2021-02-25T17:27:01.681Z",
        //             "updatedAt": "2021-02-25T17:27:01.681Z",
        //             "deletedAt": null,
        //             "name": "Cà phê sữa đá",
        //             "price": "30000",
        //             "quantity": 1
        //         }
        //     ],
        //     "transaction": [
        //         {
        //             "id": "5d985e31-04e2-4e46-8ef4-ed0d7b1ca6f0",
        //             "createdAt": "2021-02-25T17:27:15.023Z",
        //             "updatedAt": "2021-02-25T17:27:15.023Z",
        //             "deletedAt": null,
        //             "fromStatus": "INITIALIZATION",
        //             "toStatus": "REJECTION",
        //             "fault": null
        //         }
        //     ],
        //     "total": 60000
        // },
        // {
        //     "id": "219a55a3-a12f-4c7a-bab9-04524ad56729",
        //     "createdAt": "2021-02-24T17:27:01.359Z",
        //     "updatedAt": "2021-02-25T17:27:14.971Z",
        //     "deletedAt": null,
        //     "customer": {
        //         "id": "76babaeb-3a80-4c35-8695-0305083e88fd",
        //         "createdAt": "2021-02-05T03:53:58.725Z",
        //         "updatedAt": "2021-02-05T03:53:58.725Z",
        //         "deletedAt": null,
        //         "name": "Hoàng Danh",
        //         "phone": "03699800",
        //         "account": null
        //     },
        //     "partner": {
        //         "id": "1ceee651-7dea-4a0f-b517-b49166cb6cfb",
        //         "createdAt": "2021-02-05T08:42:44.411Z",
        //         "updatedAt": "2021-02-05T08:42:44.411Z",
        //         "deletedAt": null,
        //         "name": "Café Sân Thượng Phong Lan",
        //         "status": "APPROVED",
        //         "phone": null,
        //         "imageLink": "http://retaildesignblog.net/wp-content/uploads/2016/07/GENERAL-SUPPLY-store-and-cafe-Nagoya-Japan.jpg",
        //         "address": null,
        //         "account": null,
        //         "items": [],
        //         "requestItems": []
        //     },
        //     "status": "REJECTION",
        //     "items": [
        //         {
        //             "id": "10ce5a6e-5178-4387-bee7-fee713cf03ff",
        //             "createdAt": "2021-02-25T17:27:01.882Z",
        //             "updatedAt": "2021-02-25T17:27:01.882Z",
        //             "deletedAt": null,
        //             "name": "Cà phê đá",
        //             "price": "30000",
        //             "quantity": 1
        //         },
        //         {
        //             "id": "ee846edf-9558-404b-9dfc-be49bec36ab8",
        //             "createdAt": "2021-02-25T17:27:01.681Z",
        //             "updatedAt": "2021-02-25T17:27:01.681Z",
        //             "deletedAt": null,
        //             "name": "Cà phê sữa đá",
        //             "price": "30000",
        //             "quantity": 1
        //         }
        //     ],
        //     "transaction": [
        //         {
        //             "id": "5d985e31-04e2-4e46-8ef4-ed0d7b1ca6f0",
        //             "createdAt": "2021-02-25T17:27:15.023Z",
        //             "updatedAt": "2021-02-25T17:27:15.023Z",
        //             "deletedAt": null,
        //             "fromStatus": "INITIALIZATION",
        //             "toStatus": "REJECTION",
        //             "fault": null
        //         }
        //     ],
        //     "total": 60000
        // },

    ]
    // listInitOrder = listOrder;
 
    return (
        <View style={[styles.centeredView, styles.containerView]}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={visible}

            >
                <View style={[styles.centeredView, styles.containerView]}>
                    <View style={styles.modalView}>
                        <View style = {{marginBottom:10}}>
                            <Text style = {[styles.boldText, {fontSize: 30}]}>Xác Nhận Đơn Hàng</Text>
                        </View>
                        <FlatList
                            data={listOrder}
                            style = {{marginBottom: 15}}
                            keyExtractor={order => order.id}
                            renderItem={({ item }) => (
                                <NewOrderCard order={item} />
                            )
                            }
                        />
                        <Body style={[styles.buttonBody, { marginTop: 18 }]}>
                            <TouchableHighlight
                                style={{ ...styles.button, backgroundColor: "#B85450" }}
                                onPress={() => {
                                    handleRejectOrder()
                                }}
                                underlayColor={"#F8CECC"}
                                activeOpacity={0.9}
                            >
                                <Text style={[styles.text, styles.textButton, styles.boldText]}>
                                    Từ chối tất cả
                            </Text>
                            </TouchableHighlight>
                            <TouchableHighlight
                                onPress={() => { handleAcceptOrder() }}
                                underlayColor={"#D5E8D4"}
                                activeOpacity={0.9}
                                style={styles.button}
                            >
                                <Text style={[styles.text, styles.textButton, styles.boldText]}>
                                    Tiếp nhận tất cả
                            </Text>
                            </TouchableHighlight>
                        </Body>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setVisible(false)}
                        >
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>

            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setVisible(true)}
            >
                <Text style={styles.textStyle}>Show Modal</Text>
            </Pressable>
        </View >
    )
}