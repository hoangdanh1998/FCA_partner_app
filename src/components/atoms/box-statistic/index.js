
import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native';
import { ButtonColor, HeaderOrderStatistic, StatisticColor } from '../../../constance/constance';
import { styles } from './style';
const BoxStatistic = (props) => {

    const { status, number, money } = props;

    const backgroundColorBox = function (status) {
        switch (status) {
            case HeaderOrderStatistic.REALITY:
                return ButtonColor.LIGHT_AZURE;

            case HeaderOrderStatistic.INCIDENT:
                return ButtonColor.LIGHT_REJECT

            case HeaderOrderStatistic.TOTAL:
                return ButtonColor.LIGHT_ACCESS;

        }

    }

    return (
        <TouchableHighlight >
            <View style={[styles.container, { backgroundColor: backgroundColorBox(status) }]}>
                <Text style={styles.headerText}>{status}</Text>
                <View
                    style={[styles.rowContainer]}
                >
                    <Text
                        style={styles.numberText}
                    >
                        {number}
                    </Text>
                    <Text style = {styles.numberHeaderText}>
                        đơn
                    </Text>
                </View>
                <View
                    style={[styles.rowContainer]}

                >
                    <Text
                        style={styles.numberText}
                    >
                        {money}
                    </Text>
                    <Text style = {styles.numberHeaderText}>
                        VNĐ
                    </Text>
                </View>

            </View>
        </TouchableHighlight>
    )

}

export default BoxStatistic;