import { Accordion, List } from '@ant-design/react-native';
import React, { useState } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { ButtonColor } from '../../../constance/constance';
import CartItemStatistic from '../../atoms/cart-statistics';
import { styles } from './style';
const ListCartItem = (props) => {

    const { totalStatisticArr, isShowTotal, report } = props;

    const [activeSections, setActiveSections] = useState([])


    return (
        <View style={[{ ...styles.container }, { backgroundColor: isShowTotal ? ButtonColor.LIGHT_ACCESS : ButtonColor.LIGHT_REJECT }]}>
            <ScrollView>
                {
                    totalStatisticArr.map((element, index) => {
                        if (element.description) {
                            return (
                                <Accordion activeSections={activeSections}
                                    onChange={(activeSections) => {
                                        setActiveSections(activeSections)
                                    }}>
                                    <Accordion.Panel
                                        key={index} header={<CartItemStatistic item={element} isShowTotal={isShowTotal} description={element.description} />}>
                                        {element.description ? element.description.map((orderCancel) => {
                                            return (
                                                <View style = {{flex: 1}}>
                                                    <List style={{ width: 990, marginHorizontal: 15}}>
                                                        <List.Item style={{ width: "100%", }}>
                                                            <View style={{ ...styles.rowContainer, width: "100%", alignSelf: "center" }}>
                                                                <Text style={[{ flex: 1 }, styles.cancelTextItem]}>{orderCancel.description}</Text>
                                                                <View style={styles.cancelItemList}>
                                                                    <Text style={styles.cancelTextItem}>{orderCancel.total}</Text>
                                                                    <Text style={{ alignSelf: "flex-end", marginLeft: 5 }}>VNĐ</Text>
                                                                </View>
                                                            </View>
                                                        </List.Item>
                                                    </List>
                                                </View>

                                            )
                                        }) : null}
                                    </Accordion.Panel>
                                </Accordion>
                            )
                        } else {
                            return (<CartItemStatistic item={element} isShowTotal={isShowTotal} description={element.description} />)
                        }
                    })
                }
            </ScrollView>
        </View>
    );

}

export default ListCartItem;