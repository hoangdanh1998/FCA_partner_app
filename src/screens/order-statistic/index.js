import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableHighlight } from 'react-native';
import BoxStatistic from '../../components/atoms/box-statistic';
import CustomDatePicker from '../../components/atoms/date-picker';
import { styles } from './style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import ListCartItem from "../../components/molecules/list-item-statistic/index";
import { useSelector, useDispatch } from 'react-redux';
import { getReport } from '../../redux/actions/report';

export default function OrderStatistic() {
    const [isShowTotalBox, setIsShowTotalBox] = useState(true);
    const dispatch = useDispatch();

    const partner = useSelector(state => state.account.partner);

    const report = useSelector(state => state.report.report);
    const cancellationOrder = useSelector(state => state.report.cancellationOrder);
    const rejectionOrder = useSelector(state => state.report.rejectionOrder);
    const receptionOrder = useSelector(state => state.report.receptionOrder);

    // console.log("report order: ", report);
    const loadReport = async () => {
        await dispatch(getReport(partner.id, "2021-3-13", "2021-3-16"));

    }

    useEffect(() => {
        loadReport();
    }, [])

    const countOrders = () => {
        let count = 0;
        if (report) {
            let arr = Object.values(report?.orders);

            for (let i = 0; i < arr.length; i++) {
                count += arr[i].count;
            }
        }

        return count;
    }

    let countOfOrder = countOrders();

    const totalOrders = () => {
        let count = 0;
        if (report) {
            let arr = Object.values(report.orders);

            for (let i = 0; i < arr.length; i++) {
                count += arr[i].total;
            }
        }

        return count;
    }

    let totalOfOrders = totalOrders();


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

    const handleShowTotalBox = () => {
        setIsShowTotalBox(true);
    }


    const handleUnShowTotalBox = () => {
        setIsShowTotalBox(false);
    }


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
                    style={{ marginLeft: 20 }}
                />
                <CustomDatePicker />
            </View>
            <View style={styles.boxContainer}>
                <TouchableHighlight
                    onPress={handleShowTotalBox}

                    underlayColor={"#D5E8D4"}
                    activeOpacity={0.9}
                >
                    <BoxStatistic
                        status="Tổng"
                        number={countOfOrder}
                        money={totalOfOrders}
                    />
                </TouchableHighlight>

                <AntDesign
                    name="minus"
                    size={40}

                />
                <TouchableHighlight
                    onPress={handleUnShowTotalBox}
                    underlayColor={"#F8CECC"}
                    activeOpacity={0.9}
                >
                    <BoxStatistic
                        status="Sự cố"
                        number={cancellationOrder.count + rejectionOrder.count}
                        money={cancellationOrder.total + receptionOrder.total}
                    />
                </TouchableHighlight>

                <Material name="equal" size={40} />
                <BoxStatistic
                    status="Thực nhận"
                    number={receptionOrder.count}
                    money={receptionOrder.total}
                />

            </View>
            <View style={[styles.listItem]}>
                <ListCartItem
                    isShowTotalBox={isShowTotalBox}
                    report = {report}
                    totalStatisticArr={totalStatisticArr}
                />
            </View>
        </View>
    )
}
