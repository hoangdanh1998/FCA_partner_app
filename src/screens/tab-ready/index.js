import React from 'react'
import { View, Container } from 'native-base';
import TabReady from '../../components/organisms/tab-ready/tab-ready';
import SearchBar from '../../components/atoms/search-bar/search-bar';
import NewOrderModal from '../../components/molecules/new-order-modal/new-order-modal';
import { useSelector, useDispatch } from 'react-redux';




const TabReadyScreen = () => {
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
    const orderList = useSelector(state => state.orderList.filterReadyList);

    return (
        <View style={{ flex: 1 }}>
            <SearchBar />
            <NewOrderModal
                newOrder={newOrder}
            />
                <TabReady toDoOrderList={orderList} />
        </View>
    );
}
export default TabReadyScreen;