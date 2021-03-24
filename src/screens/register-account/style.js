import { StyleSheet } from 'react-native';
import { BACKGROUND_COLOR, HEADER_FONT_SIZE } from '../../constance/constance';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    rowContainer: {
        flex: 1,
        flexDirection: "row",
        marginTop: 15,
        

    },

    formContainer: {
        width: "80%",

    },

    labelText: {
        fontSize:HEADER_FONT_SIZE,
        // width: "16%",
        fontWeight: "bold",
    },

    titleText: {
        fontSize: HEADER_FONT_SIZE,
        color: BACKGROUND_COLOR
    },

    textInput: {
        // flex: 1,
        width: "50%",
        borderWidth: 1,
        paddingLeft: 10,
        paddingVertical:12,
        marginLeft:20

    },

    requireText: {
        fontSize:HEADER_FONT_SIZE,
        alignSelf:"baseline",
        color: "red"
    }
})