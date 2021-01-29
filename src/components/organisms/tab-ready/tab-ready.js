import React from 'react';
import { Container, Right, Content, List, Text, Card, CardItem, Left } from 'native-base';
import OrderCardReady from '../../molecules/order-card-ready/OrderCardReady';





const TabReady = (props) => {
    const orderList = props.sampleOrderList;
    // console.log('orderList', orderList);
    return (
        
            <Content padder>
                <List
                    dataArray={orderList.orders}
                    renderRow={(order) => <OrderCardReady order={order} />}
                />
            </Content>
        
    );
};

    export default TabReady;
