import React, { useState } from 'react';
import { View, FlatList, Text, ScrollView } from 'react-native';
import { Accordion, List } from '@ant-design/react-native';
import { styles } from './style'
import CartItemStatistic from '../../atoms/cart-statistics';
import { ButtonColor } from '../../../constance/constance';
const ListCartItem = (props) => {

    const { totalStatisticArr, isShowTotalBox, report } = props;

    const [activeSections, setActiveSections] = useState([])

    const Item = List.Item;

    const renderTotalArr = ({ item }) => 
    (
        <CartItemStatistic item = {item}/>
        // console.log(item)
    )

    const onChange = (activeSections) => {
        console.log("activity:", activeSections);
        setActiveSections(activeSections);
    }

    const CardCancelItem = (props) => {
        return (
            <View style={{ flex: 1, alignItems: "center" }}>
                <View style={[styles.cardCancelItem, styles.rowContainer]}>
                    <Text>
                        {props.reason}
                    </Text>
                    <View style={styles.rowContainer}>
                        <Text >
                            {props.total}
                        </Text>
                        <Text>VNĐ</Text>
                    </View>
                </View>
            </View>

        )
    }

    const renderCancellation = ({ item }) => {
        {/* <List.Item style>Content 2</List.Item> */ }
        return (
            <Item>
                <CardCancelItem
                    reason={item.transaction[item.transaction.length - 1].description}
                    total={item.total}
                />
            </Item>
        )
    }






    if (isShowTotalBox) {
        return (
            <View style={styles.container}>
                <FlatList
                    data={Object.values(report.orders)}
                    renderItem={renderTotalArr}
                />
            </View>
        )
    }

    else
        return (

            <View style={[{ ...styles.container }, { backgroundColor: ButtonColor.LIGHT_REJECT }]}>
                <ScrollView>
                    <Accordion
                        onChange={onChange}
                        activeSections={activeSections}
                    >
                        <Accordion.Panel 
                        header="heder 1">
                            <List>
                                {
                                    report.orders.CANCELLATION.orders.map((order) => {
                                        return (
                                            <CardCancelItem reason={order.transaction[order.transaction.length - 1].description}
                                                total={order.total} />
                                        )
                                    })
                                }
                            </List>

                        </Accordion.Panel>
                        <Accordion.Panel header = { <CartItemStatistic 
                            title = "Lỗi"
                            count = {report.orders.CANCELLATION.count}

                        />}>
                            this is panel content2 or other
                    </Accordion.Panel>
                        <Accordion.Panel header= {<CartItemStatistic 
                            tittle = "Huỷ"
                        />}>
                            Text text text text text text text text text text text text text
                            text text
                    </Accordion.Panel>
                    </Accordion>
                </ScrollView>



            </View>
        );

}

export default ListCartItem;