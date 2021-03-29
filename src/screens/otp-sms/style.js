

import { StyleSheet } from 'react-native';
import { BACKGROUND_COLOR, HEADER_FONT_SIZE } from '../../constance/constance';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop:"2%",
        // backgroundColor: "red"
        alignItems: "center"
    },

    rowContainer: {
        width:"100%",
        flexDirection: "row",
        marginTop: 15,
        

    },

    formContainer: {
        width: "50%",
        marginTop: "3%"
    },

    title: {
        fontSize: HEADER_FONT_SIZE,
        textAlign: "center"
    },

    marginContainer: {
        marginTop: "5%"
    }
})