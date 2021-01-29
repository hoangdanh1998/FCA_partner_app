import React, { useState } from 'react'
import { View, Container } from 'native-base';
import TabReady from '../../components/organisms/tab-ready/tab-ready';
import SearchBar from '../../components/atoms/search-bar/search-bar';
import NewOrderModal from '../../components/molecules/new-order-modal/new-order-modal';



const TabReadyScreen = () => {
    const sampleOrderList = {
        status: "to-do",
        orders: [
            {
                phone: "0987654321",
                estTime: 10,
                status: "acceptance",
                items: [
                    {
                        name: "Chocolate",
                        quantity: 1,
                    },
                    {
                        name: "Expresso",
                        quantity: 1,
                    },
                ],
            },
            {
                phone: "0987654321",
                estTime: 20,
                status: "acceptance",
                items: [
                    {
                        name: "Chocolate",
                        quantity: 1,
                    },
                    {
                        name: "Expresso",
                        quantity: 1,
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
                    },
                    {
                        name: "Expresso",
                        quantity: 1,
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
                    },
                    {
                        name: "Expresso",
                        quantity: 1,
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
            },
            {
                name: "Expresso",
                quantity: 1,
            },
        ]
    };
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={{ flex: 1 }}>
            <SearchBar />
            <NewOrderModal
                modalVisible={modalVisible}
                newOrder={newOrder}
                changeModalVisible={(newModalVisible) => setModalVisible(newModalVisible)} />
            <TabReady sampleOrderList={sampleOrderList} />
        </View>
    );
}
export default TabReadyScreen;