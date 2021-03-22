import { StyleSheet } from 'react-native';
import { BACKGROUND_COLOR, HEADER_FONT_SIZE } from '../../constance/constance';

export const styles = StyleSheet.create({
    

    container: {
        flex: 1,
        padding:10,
        backgroundColor: "#fff",
        paddingTop: 30
    },  

    datePickerContainer: {
        flexDirection: "row",
        justifyContent: "center"
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
    
    boxContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginTop:20
    },

    listItem: {
        flex: 1,
        // backgroundColor:"red",
        marginTop:10,
        alignItems: "center"
    }
})