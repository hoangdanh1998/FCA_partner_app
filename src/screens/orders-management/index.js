import React, { useState } from 'react'
import { View, Text, FlatList } from 'react-native';
import StatisticBox from '../../components/atoms/statistics-box';
import { styles } from './style';
import { Flex, SegmentedControl, WhiteSpace } from '@ant-design/react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { BACKGROUND_COLOR, OrderStatusVN } from '../../constance/constance';


export default function OrderManagement() {

    const itemsArray = [
        {
            key: 1,
            name: "Cà phê sữa",
            quantity: 13
        },
        {
            key: 2,
            name: "Cà phê sữa",
            quantity: 13
        },
        {
            key: 3,
            name: "Cà phê sữa",
            quantity: 13
        },
        {
            key: 4,
            name: "Cà phê sữa",
            quantity: 13
        },
        {
            key: 5,
            name: "Cà phê sữa",
            quantity: 13
        },
        {
            key: 6,
            name: "Cà phê sữa",
            quantity: 13
        },
        {
            key: 7,
            name: "Cà phê sữa",
            quantity: 13
        },
    ]

    const [filterTime, setFilterTime] = useState("D");
    const [chosenDate, setChosenDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [mode, setMode] = useState('date');


    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const onValueChange = value => {
        setFilterTime(value);
        // console.log(value);
    }

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showChosenDay = (chosenDate) => {

    }



    const onChange = (event, newDate) => {
        const currentDate = newDate || chosenDate;
        setShow(false);
        setChosenDate(currentDate);
        console.log("choose day: ", newDate);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <SegmentedControl
                    values={[
                        'D', 'W', 'M'
                    ]}
                    // onChange={this.onChange}
                    onValueChange={onValueChange}
                    style={{ width: 200 }}

                />
                <View style={styles.datePicker}>
                    <Text style={styles.chosenDateText}>
                        {chosenDate.toUTCString().substr(4, 12)}
                        {/* {chosenDate.toLocaleDateString('ar-EG')} */}

                    </Text>
                    <FontAwesome
                        name="calendar"
                        size={25}
                        onPress={showDatepicker}
                        color={BACKGROUND_COLOR}
                    />
                </View>

                {
                    show && <DateTimePicker

                        testID="dateTimePicker"
                        value={chosenDate}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                        locale="vi-VN"
                    />
                }

            </View>
            <WhiteSpace />
            <View style={styles.statisticContainer}>
                <View style={styles.totalOrders}>
                    <Text style={[styles.textCenter, styles.textTotal]}>Tổng đơn hàng</Text>
                    <Text style={[styles.textCenter, styles.totalNumber]}>512</Text>
                </View>
                <WhiteSpace />
                <View style={styles.statisticBox}>
                    <StatisticBox count="23" status={OrderStatusVN.PREPARATION} />
                    <StatisticBox count="13" status={OrderStatusVN.RECEPTION} />
                    <StatisticBox count="2" status={OrderStatusVN.CANCELLATION} />
                    <StatisticBox count="1" status={OrderStatusVN.REJECTION} />
                    <StatisticBox count="1" status={OrderStatusVN.WAIT} />

                </View>

                <View style={{ flex: 1, alignItems: "center" }}>
                    <View style={styles.statisticItemContainer}>
                        <View style = {[styles.rowContainer, { width: "80%"}]}>
                            <Text style = {[styles.textFontSize,{color: BACKGROUND_COLOR, fontWeight: "bold"}]}>Tổng sản phẩm đã bán</Text>
                            <Text style= {[styles.textFontSize, {color: BACKGROUND_COLOR, fontWeight: "bold"}]}> 819</Text>
                        </View>
                        <View style={{ width: "80%", height: "85%" }}>

                            <FlatList
                                style = {{marginTop: 10}}      
                                data={itemsArray}
                                renderItem={({ item }) => (
                                    <View style = {[styles.itemCard, styles.rowContainer]}> 
                                        <Text style = {styles.textFontSize}>{item.name}</Text>
                                        <Text style = {styles.textFontSize}>{item.quantity}</Text>
                                    </View>
                                )}
                            />
                        </View>
                    </View>
                </View>
            </View>


        </View>
    )
}
