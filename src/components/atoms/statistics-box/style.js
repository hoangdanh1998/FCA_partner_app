import { Switch } from 'native-base';
import { StyleSheet } from 'react-native';
import { BACKGROUND_COLOR, HEADER_FONT_SIZE, OrderStatusVN, StatisticColor } from '../../../constance/constance';

export const styles = StyleSheet.create({
    container: {
        width: 200,
        height: 100,
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "space-evenly",


    },

    headerTotal: {
        fontSize: 30,
        fontWeight: "bold",

    },

    statusOrder: {
        fontSize: HEADER_FONT_SIZE,
        

    },
    

})
