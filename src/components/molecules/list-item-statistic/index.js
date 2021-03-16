import React, {useState} from 'react';
import { View , FlatList} from 'react-native';
import { Accordion, List } from '@ant-design/react-native';
import {styles} from './style'
import CartItemStatistic from '../../atoms/cart-statistics';
const ListCartItem = (props) =>  {

    const {totalStatisticArr} = props;

    const [activeSections, setActiveSections] = useState([])

    const renderTotalArr = ({item}) => (
        <CartItemStatistic />
    )

    const onChange = (activeSections) => {
        setActiveSections(activeSections);
    }
    
        return (
            <View style={styles.container}>

                <FlatList 
                    data = {totalStatisticArr}
                    renderItem = {renderTotalArr}
                />
                
                {/* <Accordion
                    onChange={onChange}
                    activeSections={activeSections}
                >
                    <Accordion.Panel header="Title 1">
                        <List>
                            <List.Item>Content 1</List.Item>
                            <List.Item>Content 2</List.Item>
                            <List.Item>Content 3</List.Item>
                        </List>
                    </Accordion.Panel>
                    <Accordion.Panel header="Title 2">
                        this is panel content2 or other
                    </Accordion.Panel>
                    <Accordion.Panel header="Title 3">
                        Text text text text text text text text text text text text text
                        text text
                    </Accordion.Panel>
                </Accordion> */}
            </View>
        );
    
}

export default ListCartItem;