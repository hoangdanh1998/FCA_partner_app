import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './style'

export default function CartItemStatistic() {
    return (
        <View style={[styles.container, styles.rowContainer]}>
            <Text
                style={styles.titleText}
            >Hoàn tất</Text>
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
