import React, { useEffect, useState, useCallback } from 'react'
import { View } from 'native-base';
import { useSelector, useDispatch } from 'react-redux';
import { ActivityIndicator } from 'react-native'


import TabReady from '../../components/organisms/tab-ready/tab-ready';
import SearchBar from '../../components/atoms/search-bar/search-bar';
import NewOrderModal from '../../components/molecules/new-order-modal/new-order-modal';
import { getReadinessOrderToday } from '../../redux/action/order-list';
import {styles} from './style';
import { PRIMARY_COLOR } from '../../constance/constance';
import { set } from 'react-native-reanimated';



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

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    const dispatch = useDispatch();

    const loadOrderList = useCallback(async () => {
        setIsLoading(true);
        try {
            await dispatch(getReadinessOrderToday());
        } catch (error) {
            setError(error.message);
        }
        
        setIsLoading(false);
    }, [dispatch,setIsLoading]);

    useEffect(() => {
        
        loadOrderList();

    }, [dispatch, loadOrderList]);

    if (isLoading) {
        return (
            <View style={styles.centered}>
                <ActivityIndicator size="large" color={PRIMARY_COLOR} />
            </View>
        )
    };


    return (
        <View style={{ flex: 1 }}>
            <SearchBar />
            {/* <NewOrderModal
                newOrder={newOrder}
            /> */}
            <TabReady toDoOrderList={orderList} />
        </View>
    );
}
export default TabReadyScreen;