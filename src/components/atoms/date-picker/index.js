import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { BACKGROUND_COLOR } from '../../../constance/constance';
import { styles } from './style';


export default function CustomDatePicker(props) {
    const { setDate, value } = props;

    const [isShow, setIsShow] = useState(false);
    const [chosenDate, setChosenDate] = useState(new Date());

    const showDatepicker = () => {
        setIsShow(true);
    };

    const onChange = (event, newDate) => {
        const currentDate = newDate || value;
        setIsShow(false);
        setDate(currentDate);
        console.log("choose day: ", newDate);
    }

    return (
        <View>
            <TouchableOpacity onPress={() => { setIsShow(true) }}>
            <View style={styles.datePicker}>
                <Text style={styles.chosenDateText}>
                    {/* {value.toLocaleDateString()} */}
                    {value?.getDate() + '/' + (value?.getMonth() + 1) + '/' + (value?.getYear() + 1900)}

                </Text>
                <FontAwesome
                    name="calendar"
                    size={25}
                    onPress={showDatepicker}
                    color={BACKGROUND_COLOR}
                />
            </View>
            </TouchableOpacity>
            {
                isShow && <DateTimePicker
                    testID="dateTimePicker"
                    value={value}
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
