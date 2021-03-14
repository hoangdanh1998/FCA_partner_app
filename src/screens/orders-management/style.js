import { StyleSheet } from 'react-native';
import { BACKGROUND_COLOR, HEADER_FONT_SIZE } from '../../constance/constance';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 10,
        
        margin: 5
        
    },
    header: {
        flexDirection: "row",
        justifyContent: "center",

    },

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
    statisticBox: {
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    statisticContainer: {
        borderWidth: 1,
        borderColor: BACKGROUND_COLOR,
        flex: 1,
        padding: 5
    },

    totalOrders: {
        textAlign: "center",
        width: "100%"
    },
    textCenter: {
        textAlign: "center"
    },

    totalNumber: {
        fontSize: 40,
        fontWeight: "bold"
    },

    textTotal: {
        fontSize: HEADER_FONT_SIZE,
        fontWeight: "bold"
    },

    statisticItemContainer: {
        borderWidth: 1,
        width: "85%",
        flex: 1,
        margin: 10,
        padding: 10,
        alignItems: "center"
    },

    rowContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },

    itemCard: {
        borderWidth: 1,
        flexDirection: "row",
        padding: 10,
        marginBottom: 10
        
    },

    textFontSize: {
fontSize: HEADER_FONT_SIZE
    },
    
    
})