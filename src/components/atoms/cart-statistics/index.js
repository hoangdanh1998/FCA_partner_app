import React from 'react';
import { Text, View } from 'react-native';
import { ButtonColor, StatisticColor } from '../../../constance/constance';
import { styles } from './style';

export default function CartItemStatistic(props) {
    const { item, isShowTotal, description} = props;
    const setColorForText = (title) => {
        switch (title) {
            case "Hoàn tất":
                return StatisticColor.RECEPTION;
            case "Từ chối":
                return StatisticColor.REJECTION;
            case "Huỷ":
                return StatisticColor.CANCELLATION;
        }
    }
    

    const changeMarginLeft = () => {
        if(description) {
            return 5;
        } else {
            return 20
        }
    }


    return (
        <View  style={isShowTotal ? [styles.container] : [styles.container, 
        {width: "93%", alignSelf: "flex-start", marginHorizontal: changeMarginLeft() }]}>
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
                <Text style = {{color: setColorForText(item.title), alignSelf: "flex-end", marginLeft:5}}>đơn</Text>
            </View>
            <View style={styles.rowContainer}>
                <Text
                    style={[styles.titleText, { color: setColorForText(item.title), textAlign: "center" }]}
                >
                    {item.money}
                    {/* 1000000000000 */}
                </Text>
                <Text style = {{ color: setColorForText(item.title), alignSelf: "flex-end", marginLeft: 5}} >VNĐ</Text>
            </View>
        </View>
    )
}
