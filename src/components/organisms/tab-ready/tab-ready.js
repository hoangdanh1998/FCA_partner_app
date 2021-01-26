import React from 'react';
import { Container, Right, Content, List, Text, Card, CardItem, Left } from 'native-base';
import OrderCardReady from '../../molecules/order-card-ready/OrderCardReady';
import { styles } from './style';




const TabReady = (props) => {
    var orderList = props.orderList;
    return (
        
            <Content padder>
                <List
                    style={{ flex: orderList.orders.length }}
                    dataArray={orderList.orders}
                    renderRow={(order) => <OrderCardReady order={order} />}
                />
            </Content>
        
    );
};

    export default TabReady;
