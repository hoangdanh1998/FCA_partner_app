import React from 'react';
import { View, Text } from 'react-native';
import { OrderStatus } from '../../../constance/constance';
import { styles } from './style'

export default function CartItemStatistic(props) {
    const { item } = props;
    return (
        <View style={[styles.container, styles.rowContainer]}>
            {() => {
                console.log("status 0 :", item.orders[0].status);

            }}

            <View style={styles.rowContainer}>
                <Text
                    style={styles.titleText}
                >
                    296
                </Text>
                <Text>đơn</Text>
            </View>
            <View style={styles.rowContainer}>
                <Text
                    style={styles.titleText}
                >
                    296000
                </Text>
                <Text>VNĐ</Text>
            </View>
        </View>
    )
}
