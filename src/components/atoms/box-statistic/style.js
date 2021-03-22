
import { StyleSheet } from "react-native";
import { HEADER_FONT_SIZE, SizeOrderStatistic } from '../../../constance/constance'

export const styles = StyleSheet.create({
    container: {
        width: 350,
        height: 200,
        
        justifyContent: "space-evenly",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,

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