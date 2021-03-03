import { useIsFocused } from '@react-navigation/native';
import { View } from 'native-base';
import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from '../../components/atoms/search-bar/search-bar';
import TabReady from '../../components/organisms/tab-ready/tab-ready';
import { EMPTY_LIST_MESSAGE, OrderStatus, PRIMARY_COLOR } from '../../constance/constance';
import { getOrderAfterUpdate, getReadinessOrderToday } from '../../redux/actions/order-list';
import { styles } from './style';
const TabReadyScreen = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [searchList, setSearchList] = useState([])
    const [error, setError] = useState();

    const readyList = useSelector(state => state.orderList.filterReadyList);
    const isFocused = useIsFocused();
    const dispatch = useDispatch();
    
    if(isFocused) {
        dispatch(getOrderAfterUpdate(OrderStatus.READINESS));
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




    const handelSearchReadyList = (phone) => {
        const resultList = readyList.filter((order) => {
            return order.customer.phone.search(phone) != -1;
        })

        setSearchList(resultList);
    }

    useEffect(() => {
        // loadOrderList();
        console.log(readyList)
        setSearchList(readyList);
    }, [dispatch, readyList]);


    if (readyList.length === 0) {
        return (
            <View style={{ flex: 1 }, styles.centered}>
                <Text style={styles.message}>{EMPTY_LIST_MESSAGE}</Text>
            </View>
        )
    }
    
    if (isLoading) {
        return (
            <View style={styles.centered}>
                <ActivityIndicator size="large" color={PRIMARY_COLOR} />
            </View>
        )
    };
    return (
        <View style={{ flex: 1, backgroundColor: "#ffff" }}>
            <SearchBar handelSearchReadyList={handelSearchReadyList} />
            <TabReady toDoOrderList={searchList} />
        </View>
    );
}
export default TabReadyScreen;