import React from 'react';
import { Container, Content, List } from 'native-base';
import OrderCardReady from '../../molecules/order-card-ready/OrderCardReady';
import { SafeAreaView, View, Text, FlatList } from 'react-native'


const TabReady = (props) => {
    const toDoOrderList = props.toDoOrderList;
    console.log("list lenght", toDoOrderList.length);
    console.log("todo list", Array.from (toDoOrderList, (oder) => {
        return oder
    }).isArray);
    const tmp = Array.from (toDoOrderList, (oder) => {
        return oder
    });


    const handle = () => toDoOrderList.map(item => {
        return (<View>
            <Text>{item.customer.phone}</Text>
        </View>)
    })

    return (
            <View style={{flex: 1}}>
                {/* <List> */}
                <FlatList
                    // keyExtractor={(item) => item.index}
                    data={tmp}
                    renderItem = {(item) => <OrderCardReady order = {item}/>}
                    refreshing = {true}
                />
                {/* </List> */}
                
            </View>
                


    );
};

export default TabReady;
