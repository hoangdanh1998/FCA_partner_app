import { StyleSheet } from 'react-native';
import { HEADER_FONT_SIZE } from '../../../constance/constance';

export const styles = StyleSheet.create({
    button: {
        width:150,
        backgroundColor: "#82B366",
        borderRadius: 30,
        padding:10,
        elevation: 2,
        alignItems:"center",
    },
    textButton: {
        color:"#fff"
    },
    boldText: {
        fontWeight: "bold"
    },
    centered: {
        flex: 1,
        alignItems:"center",
        justifyContent: "center"
    },
    error_message: {
        fontSize: HEADER_FONT_SIZE,
        color: "red"
    },
})