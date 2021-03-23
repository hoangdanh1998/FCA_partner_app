import React from 'react';
import { Text, View } from 'react-native';
import { ButtonColor, StatisticColor } from '../../../constance/constance';
import { styles } from './style';
import NumberFormat from 'react-number-format';


export default function CartItemStatistic(props) {
    const { item, isShowTotal, description } = props;
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
        if (description) {
            return 5;
        } else {
            return 20
        }
    }


    return (
        <View style={isShowTotal ? [styles.container] : [styles.container,
        { width: "93%", alignSelf: "flex-start", marginHorizontal: changeMarginLeft() }]}>
            <View style={{ ...styles.rowContainer, justifyContent: "center" }}>
                <Text
                    style={[styles.titleText, { color: setColorForText(item.title) }]}
                >
                    {item.title}
                </Text>
            </View>
            <View style={styles.rowContainer}>
                <NumberFormat
                    value={item.number}
                    displayType={"text"}
                    thousandSeparator={true}
                    renderText={(formattedValue) => (
                        <Text note style={[styles.titleText, { color: setColorForText(item.title) }]}>
                            {formattedValue}
                        </Text>
                    )}
                />

                {/* <Text
                    style={[styles.titleText, { color: setColorForText(item.title) }]}
                >
                    {item.number}
                </Text> */}
                <Text style={{ color: setColorForText(item.title), alignSelf: "flex-end", marginLeft: 5 }}>đơn</Text>
            </View>
            <View style={{ ...styles.rowContainer, flex: 2 }}>
                <NumberFormat
                    value={item.money}
                    displayType={"text"}
                    thousandSeparator={true}
                    renderText={(formattedValue) => (
                        <Text note style={[styles.titleText, { color: setColorForText(item.title) }]}>
                            {formattedValue}
                        </Text>
                    )}
                />
                <Text style={{ color: setColorForText(item.title), alignSelf: "flex-end", marginHorizontal: 10 }} >VNĐ</Text>
            </View>
        </View>
    )
}
