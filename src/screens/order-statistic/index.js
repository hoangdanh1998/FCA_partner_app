import React from 'react';
import { View, Text } from 'react-native';
import BoxStatistic from '../../components/atoms/box-statistic';
import CustomDatePicker from '../../components/atoms/date-picker';
import {styles} from './style';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function OrderStatistic() {
    
    return (
        <View style = {styles.container}>
            <View style = {styles.datePickerContainer}>
                <CustomDatePicker/>
                <AntDesign 
                    name = "arrowright"
                    size = {40}
                />
                <CustomDatePicker/>
            </View>
            <View>
                <BoxStatistic />
            </View>
            <View></View>
        </View>
    )
}
