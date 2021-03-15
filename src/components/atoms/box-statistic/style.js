
import { StyleSheet } from "react-native";
import {HEADER_FONT_SIZE, SizeOrderStatistic} from '../../../constance/constance'

export const styles = StyleSheet.create({
    container: {
        width: 350,
        height: 200,
        marginTop: 10,
        justifyContent: "space-evenly"
        
    },
    headerText: {
        fontWeight: "bold",
        fontSize: SizeOrderStatistic.STATUS_FONT_SIZE,
        textAlign: "center",
    },

    rowContainer: {
        flexDirection: "row",
        justifyContent: "flex-end",
        marginRight: 15
    },

    numberText: {
        fontSize: SizeOrderStatistic.NUMBER_FONT_SIZE,
        // fontWeight: "bold"
    },
    numberHeaderText: {
        fontSize: HEADER_FONT_SIZE,
        alignSelf: "flex-end",
        marginLeft: 10
        
    }
});