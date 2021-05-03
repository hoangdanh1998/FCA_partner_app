import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import CartBlockUser from '../../components/atoms/cart-block-user'
import { useSelector, useDispatch } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';
import { getPartner } from '../../redux/actions/account';
import {styles} from './style';
import { BACKGROUND_COLOR } from '../../constance/constance';
import AwesomeAlert from 'react-native-awesome-alerts';


export default function BlockUserScreen() {

    const dispatch = useDispatch();

    const bannedCustomers = useSelector(state => state.account.bannedCustomers);
    const partner = useSelector(state => state.account.partner);

    const [isLoading, setIsLoading] = useState(false);

    const isFocused = useIsFocused();

    const renderListCustomer = async () => {
        try {
            setIsLoading(true);
            await dispatch(getPartner(partner?.id));
        } catch (error) {
            console.error("err get partner: ", error);
            
        }
        setIsLoading(false);
    }
    

    useEffect( () => {
        renderListCustomer();

    }, [isFocused])

    if (isLoading) {
        return (
            <View style = {styles.centered}>
                <ActivityIndicator size="large" color={BACKGROUND_COLOR} />
            </View>
        );
    }

    if (bannedCustomers.length === 0) {
        return (
            <View style = {styles.centered}>
                <Text style = {styles.title}>
                    Không có khách hàng nào
                </Text>
            </View>
        )
    } 


    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <FlatList
                data={bannedCustomers}
                horizontal={false}
                renderItem={({ item }) => {
                    // console.log(item);
                    return (<CartBlockUser customer={item} 
                        
                    />)
                }


                }
            />
        </View>
    )
}
