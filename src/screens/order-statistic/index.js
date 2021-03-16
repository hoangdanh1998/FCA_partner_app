import React from 'react';
import { View, Text, FlatList } from 'react-native';
import BoxStatistic from '../../components/atoms/box-statistic';
import CustomDatePicker from '../../components/atoms/date-picker';
import { styles } from './style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import ListCartItem from "../../components/molecules/list-item-statistic/index";

export default function OrderStatistic() {

    const totalStatisticArr = [
        {
            title: "Hoàn tất",
            number: 296,
            money: 30000000
        },
        {
            title: "Từ chối",
            number: 10,
            money: 300000
        },
        {
            title: "Thực nhận",
            number: 286,
            money: 27700000
        }
    ]

    const orderStatisticArr =
        [
            {
                id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
                status: "Tổng",
                number: 300,
                money: 300000000
            },
            {

                id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',

                status: "Sự cố",
                number: 10,
                money: 20000000
            },
            {
                id: '58694a0f-3da1-471f-bd96-145571e29d72',
                status: "Thực nhận",
                number: 290,
                money: 110000
            },

        ]

    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },
    ];


    const showBox = ({ item }) => (
        <BoxStatistic />
    );


    return (
        <View style={styles.container}>
            <View style={styles.datePickerContainer}>
                <CustomDatePicker />
                <AntDesign
                    name="arrowright"
                    size={40}
                />
                <CustomDatePicker />
            </View>
            <View style={styles.boxContainer}>
                <BoxStatistic
                    status={orderStatisticArr[0].status}
                    number={orderStatisticArr[0].number}
                    money={orderStatisticArr[0].money}
                />
                <AntDesign
                    name="minus"
                    size={40}
                />
                <BoxStatistic
                    status={orderStatisticArr[1].status}
                    number={orderStatisticArr[1].number}
                    money={orderStatisticArr[1].money}
                />
                <Material name="equal" size={40} />
                <BoxStatistic
                    status={orderStatisticArr[2].status}
                    number={orderStatisticArr[2].number}
                    money={orderStatisticArr[2].money}
                />

            </View>
            <View style = {[styles.listItem]}>
                <ListCartItem
                    totalStatisticArr={ totalStatisticArr}
                />
            </View>
        </View>
    )
}
