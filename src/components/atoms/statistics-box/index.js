import React from 'react';
import { View, Text } from 'react-native';
import { OrderStatusVN, StatisticColor } from '../../../constance/constance';
import { styles } from './style'

export default function StatisticBox(props) {

    const { count, status } = props;
    const colorTextBox = function (status) {
        switch (status) {
            case OrderStatusVN.PREPARATION:
                return StatisticColor.PREPARATION;

            case OrderStatusVN.RECEPTION:
                return StatisticColor.RECEPTION;

            case OrderStatusVN.CANCELLATION:
                return StatisticColor.CANCELLATION;

            case OrderStatusVN.REJECTION:
                return StatisticColor.REJECTION;
            case OrderStatusVN.WAIT:
                return StatisticColor.WAIT;
        }

    }
    return (
        <View
            style={[
                styles.container,
                { borderColor: colorTextBox(status) }
            ]}
        >
            <Text style={[styles.headerTotal, { color: colorTextBox(status) }]}>{count}</Text>
            <Text style={[styles.statusOrder, { color: colorTextBox(status) }]}>{status}</Text>
        </View>
    )
}
