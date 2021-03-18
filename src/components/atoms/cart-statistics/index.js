import React from 'react';
import { Text, View } from 'react-native';
import { ButtonColor, StatisticColor } from '../../../constance/constance';
import { styles } from './style';

export default function CartItemStatistic(props) {
    const { item } = props;
    const setColorForText = (title) => {
        switch (title) {
            case "Hoàn tất":
                return ButtonColor.ACCESSS;
            case "Từ chối":
                return ButtonColor.REJECTION;
            case "Huỷ":
                return StatisticColor.CANCELLATION;
        }
    }

    return (
        <View style={[styles.container]}>
            <View style={[styles.rowContainer]}>
                <Text
                    style={[styles.titleText, { color: setColorForText(item.title) }]}
                >
                    {item.title}
                </Text>
            </View>
            <View style={styles.rowContainer}>
                <Text
                    style={[styles.titleText, { color: setColorForText(item.title) }]}
                >
                    {item.number}
                    {/* 100000000000000 */}
                </Text>
                <Text style = {{color: setColorForText(item.title)}}>đơn</Text>
            </View>
            <View style={styles.rowContainer}>
                <Text
                    style={[styles.titleText, { color: setColorForText(item.title), textAlign: 'center' }]}
                >
                    {item.money}
                    {/* 1000000000000 */}
                </Text>
                <Text>VNĐ</Text>
            </View>
        </View>
    )
}
