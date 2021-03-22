import { BACKGROUND_COLOR, HEADER_FONT_SIZE } from '../../../constance/constance';
import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({

    datePicker: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: 350,
        borderWidth: 1,
        padding: 5,
        marginLeft: 20,
        borderColor: BACKGROUND_COLOR
    },

    chosenDateText: {
        fontSize: HEADER_FONT_SIZE,
        color: BACKGROUND_COLOR
    },
    
    
})