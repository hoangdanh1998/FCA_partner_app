import { useIsFocused } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { TouchableHighlight, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';
import BoxStatistic from '../../components/atoms/box-statistic';
import CustomDatePicker from '../../components/atoms/date-picker';
import ListCartItem from "../../components/molecules/list-item-statistic/index";
import { OrderStatus } from '../../constance/constance';
import { getReport } from '../../redux/actions/reportAction';
import { styles } from './style';

export default function OrderStatistic() {
    // const [isShowTotalBox, setIsShowTotalBox] = useState(true);
    const dispatch = useDispatch();
    const isFocused = useIsFocused();

    const partner = useSelector(state => state.account.partner);

    const report = useSelector(state => state.report.report);

    const cancellationOrder = useSelector(state => state.report.cancellationOrder);
    const rejectionOrder = useSelector(state => state.report.rejectionOrder);
    const receptionOrder = useSelector(state => state.report.receptionOrder);
    const closureOrder = useSelector(state => state.report.closureEOrder)

    const [totalMoney, setTotalMoney] = useState(0);
    const [totalCount, setTotalCount] = useState(0);
    const [countErrorOrder, setCountErrorOrder] = useState(0);
    const [moneyErrorOrder, setMoneyErrorOrder] = useState(0);
    const [remainCount, setRemainCount] = useState(0);
    const [remainMoney, setRemainMoney] = useState(0);
    const [listReport, setListReport] = useState();
    const [isShowTotal, setIsShowTotal] = useState(false);
    const [listError, setListError] = useState();
    const [listTotal, setListTotal] = useState();
    const [fromDate, setFromDate] = useState(new Date());
    const [toDate, setToDate] = useState(new Date());

    const loadReport = async () => {
        dispatch(getReport(partner.id, fromDate, toDate));
    }

    useEffect(() => {
        if (cancellationOrder) {
            // console.log(cancellationOrder)
        }

    })


    useEffect(() => {
        toDate.setDate(toDate.getDate() + 1)
    }, [])

    useEffect(() => {
        if (fromDate >= toDate) {
            setToDate(fromDate);
        }
        loadReport();
    }, [fromDate, toDate])

    useEffect(() => {
        loadReport();
        setIsShowTotal(true)
    }, [isFocused])

    useEffect(() => {
        if (report) {
            let count = 0, money = 0, errorCount = 0, errorMoney = 0;
            let listErrTmp = listError;
            Object.values(report.orders).forEach((itemReport) => {
                const status = itemReport.orders[0].status;
                count += itemReport.count;
                money += itemReport.total;
                if (status === OrderStatus.CANCELLATION || status === OrderStatus.REJECTION) {
                    errorMoney += itemReport.total;
                    errorCount += itemReport.count;
                }
            })
            setTotalCount(count);
            setTotalMoney(money);
            setCountErrorOrder(errorCount);
            setMoneyErrorOrder(errorMoney);
            setRemainCount(count - errorCount);
            setRemainMoney(money - errorMoney);


        }
    }, [report])

    useEffect(() => {
        const errList = [
            {
                title: "Từ chối",
                number: rejectionOrder ? rejectionOrder.count : 0,
                money: rejectionOrder ? rejectionOrder.total : 0
            },
            // {
            //     title: "Lỗi",
            //     number: countErrorOrder,
            //     description: [],
            //     money: moneyErrorOrder
            // },
            {
                title: "Huỷ",
                number: cancellationOrder ? cancellationOrder.count : 0,
                description: [],
                money: cancellationOrder ? cancellationOrder.total : 0
            }
        ];

        const totalList = [
            {
                title: "Hoàn tất",
                number: receptionOrder ? receptionOrder.count : 0 + closureOrder ? closureOrder.count : 0,
                money: receptionOrder ? receptionOrder.total : 0 + closureOrder ? closureOrder.total : 0
            },
            {
                title: "Từ chối",
                number: rejectionOrder ? rejectionOrder.count : 0,
                money: rejectionOrder ? rejectionOrder.total : 0
            },
            {
                title: "Huỷ",
                number: cancellationOrder ? cancellationOrder.count : 0,
                money: cancellationOrder ? cancellationOrder.total : 0
            }
        ]

        if (cancellationOrder) {
            const listErrorTmp = errList;
            listErrorTmp[listErrorTmp.length - 1][`description`] = [];
            cancellationOrder.orders.map((order) => {
                listErrorTmp[listErrorTmp.length - 1][`description`].push({
                    description: order.transaction[order.transaction.length - 1].description,
                    total: order.total,
                });
            })
            setListError(listErrorTmp);
        }
        setListTotal(totalList);

    }, [cancellationOrder, rejectionOrder, receptionOrder, closureOrder])

    useEffect(() => {
        if (isShowTotal) {
            setListReport(listTotal)
        } else {
            setListReport(listError)
        }
    }, [isShowTotal, listReport, listError])

    return (
            <View style={styles.container}>
                <View style={styles.datePickerContainer}>
                <CustomDatePicker value={fromDate} setDate={setFromDate} />
                    <AntDesign
                        name="arrowright"
                        size={40}
                        style={{ marginLeft: 20 }}
                    />
                <CustomDatePicker value={toDate} setDate={setToDate} />
                </View>
                <View style={styles.boxContainer}>
                    <TouchableHighlight
                    onPress={() => { setIsShowTotal(true) }}
                        underlayColor={"#D5E8D4"}
                        activeOpacity={0.9}
                    >
                        <BoxStatistic
                            status="Tổng"
                        number={totalCount}
                        money={totalMoney}
                        />
                </TouchableHighlight>
                    <AntDesign
                        name="minus"
                    size={40}
                    />
                    <TouchableHighlight
                    onPress={() => {
                        setIsShowTotal(false)
                    }}
                        underlayColor={"#F8CECC"}
                        activeOpacity={0.9}
                    >
                        <BoxStatistic
                            status="Sự cố"
                        number={countErrorOrder}
                        money={moneyErrorOrder}
                        />
                </TouchableHighlight>
                    <Material name="equal" size={40} />
                    <BoxStatistic
                        status="Thực nhận"
                    number={remainCount}
                    money={remainMoney}
                />
                </View>
                <View style={[styles.listItem]}>
                {listReport ? (<ListCartItem
                    report={report}
                    isShowTotal={isShowTotal}
                    totalStatisticArr={listReport}
                />) : null}
                </View>
            </View>
    )
}
