import React from 'react';
import { Content, List } from 'native-base';
import OrderCardReady from '../../molecules/order-card-ready/OrderCardReady';
import { SafeAreaView } from 'react-native'


const TabReady = (props) => {
    const toDoOrderList = props.toDoOrderList;
    const handleUpdateStatus = props.handleUpdateStatus;
    return (

        <Content padder>
                <List
                    keyExtractor={toDoOrderList.key}
                    dataArray={toDoOrderList}
                    renderRow={(order) => <OrderCardReady order={order} handleUpdateStatus = {handleUpdateStatus}/>}
                />

        </Content>

    );
};

export default TabReady;
