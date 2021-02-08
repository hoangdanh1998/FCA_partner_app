import React, { useState } from 'react'
import { View, Container } from 'native-base';
import TabReady from '../../components/organisms/tab-ready/tab-ready';
import SearchBar from '../../components/atoms/search-bar/search-bar';
import NewOrderModal from '../../components/molecules/new-order-modal/new-order-modal';
import {useSelector} from 'react-redux';



const TabReadyScreen = () => {
    const toDoOrderList = {
        status: "to-do",
        orders: [
            {
                phone: "0987654321",
                estTime: 10,
                status: "arrived",
                items: [
                    {
                        name: "Chocolate",
                        quantity: 1,
                        price: 15000
                    },
                    {
                        name: "Expresso",
                        quantity: 1,
                        price: 13000
                    },
                ],
            },
            {
                phone: "0987654321",
                estTime: 20,
                status: "arrived",
                items: [
                    {
                        name: "Chocolate",
                        quantity: 1,
                        price: 15000
                    },
                    {
                        name: "Expresso",
                        quantity: 1,
                        price: 12000
                    },
                ],
            },
            {
                phone: "0987654321",
                estTime: 30,
                status: "arrived",
                items: [
                    {
                        name: "Chocolate",
                        quantity: 1,
                        price: 15000
                    },
                ],
            },
            {
                phone: "0987654321",
                estTime: 30,
                status: "arrived",
                items: [
                    {
                        name: "Chocolate",
                        quantity: 1,
                        price: 15000
                    },
                ],
            },
            {
                phone: "0987654321",
                estTime: 30,
                status: "arrived",
                items: [
                    {
                        name: "Chocolate",
                        quantity: 1,
                        price: 15000
                    },
                ],
            },
            {
                phone: "0987654321",
                estTime: 30,
                status: "acceptance",
                items: [
                    {
                        name: "Chocolate",
                        quantity: 1,
                        price: 15000
                    },
                ],
            },
            {
                phone: "0987654321",
                estTime: 30,
                status: "acceptance",
                items: [
                    {
                        name: "Chocolate",
                        quantity: 1,
                        price: 15000
                    },
                    {
                        name: "Expresso",
                        quantity: 1,
                        price: 15000
                    },
                ],
            },
            {
                phone: "0987654321",
                estTime: 30,
                status: "acceptance",
                items: [
                    {
                        name: "Chocolate",
                        quantity: 1,
                        price: 15000
                    },
                    {
                        name: "Expresso",
                        quantity: 1,
                        price: 15000
                    },
                ],
            },
        ],
    };
    const newOrder = {
        phone: "0987654321",
        estTime: 30,
        status: "acceptance",
        items: [
            {
                name: "Chocolate",
                quantity: 1,
                price: 15000
            },
            {
                name: "Expresso",
                quantity: 1,
                price: 15000
            },
        ]
    };
    const [modalVisible, setModalVisible] = useState(false);
    const orderList = useSelector(state => state.orderList.filterReadyList)
    
    return (
        <View style={{ flex: 1 }}>
            <SearchBar />
            {/* <NewOrderModal
                modalVisible={modalVisible}
                newOrder={newOrder}
                changeModalVisible={(newModalVisible) => setModalVisible(newModalVisible)} /> */}
            <TabReady toDoOrderList={orderList} />
        </View>
    );
}
export default TabReadyScreen;