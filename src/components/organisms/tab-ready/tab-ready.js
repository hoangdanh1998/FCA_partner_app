import React from 'react';
import { Content, List} from 'native-base';
import OrderCardReady from '../../molecules/order-card-ready/OrderCardReady';


const TabReady = (props) => {
    const toDoOrderList = props.toDoOrderList;
    return (
        
            <Content padder>
                <List
                    dataArray={toDoOrderList}
                    renderRow={(order) => <OrderCardReady order={order} />}
                />
            </Content>
        
    );
};

    export default TabReady;
