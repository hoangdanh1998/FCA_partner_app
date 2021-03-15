import React, { useState } from 'react'
import { View, Text } from 'react-native';
import {styles} from './style'
import DateTimePicker from '@react-native-community/datetimepicker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { BACKGROUND_COLOR, HEADER_FONT_SIZE } from '../../../constance/constance';


export default function CustomDatePicker(props) {
    const [isShow, setIsShow] = useState(false);
    const [chosenDate, setChosenDate] = useState(new Date());


    const showDatepicker = () => {
        setIsShow(true);
    };

    const onChange = (event, newDate) => {
        const currentDate = newDate || chosenDate;
        setIsShow(false);
        setChosenDate(currentDate);
        console.log("choose day: ", newDate);
    }

    return (
        <View>
            <View style={styles.datePicker}>
                <Text style={styles.chosenDateText}>
                    {chosenDate.toLocaleDateString()}
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
                isShow && <DateTimePicker

                    testID="dateTimePicker"
                    value={chosenDate}
                    mode="date"
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                    locale="vi-VN"
                />
            }
        </View>

    )


}
