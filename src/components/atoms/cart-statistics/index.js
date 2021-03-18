import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './style';

export default function CartItemStatistic(props) {
    const { item } = props;
    return (
        <View style={[styles.container, styles.rowContainer]}>
            <View style={styles.rowContainer}>
                <Text
                    style={styles.titleText}
                >
                    {item.title}
                </Text>
            </View>
            <View style={styles.rowContainer}>
                <Text
                    style={styles.titleText}
                >
                    {item.number}
                </Text>
                <Text>đơn</Text>
            </View>
            <View style={styles.rowContainer}>
                <Text
                    style={styles.titleText}
                >
                    {item.money}
                </Text>
                <Text>VNĐ</Text>
            </View>
        </View>
    )
}
