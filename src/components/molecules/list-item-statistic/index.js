import { Accordion, List } from '@ant-design/react-native';
import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
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
                                    <Accordion.Panel key={index} header={<CartItemStatistic item={element} />}>
                                            {element.description ? element.description.map((orderCancel) => {
                                                return (
                                                    <List>
                                                    <List.Item>{orderCancel.description} - {orderCancel.total}</List.Item>
                                                    </List>
                                                )
                                            }) : null}
                                    </Accordion.Panel>
                                </Accordion>
                            )
                        } else {
                            return (<CartItemStatistic item={element} />)
                        }
                    })
                }
            </ScrollView>
            </View>
        );

}

export default ListCartItem;