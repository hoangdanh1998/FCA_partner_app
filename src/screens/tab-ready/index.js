import React, { useEffect, useState, useCallback } from 'react'
import { View } from 'native-base';
import { useSelector, useDispatch } from 'react-redux';
import { ActivityIndicator, Text } from 'react-native'


import TabReady from '../../components/organisms/tab-ready/tab-ready';
import SearchBar from '../../components/atoms/search-bar/search-bar';
import NewOrderModal from '../../components/molecules/new-order-modal/new-order-modal';
import { getOrderAfterUpdate, getReadinessOrderToday, searchReadyList } from '../../redux/action/order-list';
import {styles} from './style';
import { EMPTY_LIST_MESSAGE, OrderStatus, PRIMARY_COLOR } from '../../constance/constance';
import {useIsFocused} from '@react-navigation/native';



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
    const searchOrderList = useSelector(state => state.orderList.filterSearchOrderList);
    console.log("filter ", searchOrderList);

    const isFocused = useIsFocused();
    const dispatch = useDispatch();

    if(isFocused) {
        dispatch(getOrderAfterUpdate(OrderStatus.READINESS));
    }

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    const handleSearchOrderList = (phone) => {
        dispatch(searchReadyList(phone));
        
    }

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
        
        // loadOrderList();
        dispatch(getOrderAfterUpdate())

    }, [dispatch, loadOrderList]);

    if (isLoading) {
        return (
            <View style={styles.centered}>
                <ActivityIndicator size="large" color={PRIMARY_COLOR} />
            </View>
        )
    };

    if (orderList.length === 0) {
        return (
            <View style={{flex: 1}, styles.centered}>
                <Text style ={styles.message}>{EMPTY_LIST_MESSAGE}</Text>
            </View>
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: "#ffff" }}>
            <SearchBar handleSearchOrderList = {handleSearchOrderList}/>
            {/* <NewOrderModal
                newOrder={newOrder}
            /> */}
            <TabReady toDoOrderList={searchOrderList} />
        </View>
    );
}
export default TabReadyScreen;