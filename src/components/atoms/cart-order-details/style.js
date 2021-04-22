import { StyleSheet } from 'react-native';
import { ButtonColor, HEADER_FONT_SIZE, LIGHT_COLOR } from '../../../constance/constance';

export const styles = StyleSheet.create({
    rowContainer: {
        flexDirection:"row",
        justifyContent: "space-between",
        marginTop:5
    },
    flex1: {
        flex:1
    },
    title: {
        fontSize: 19,
        lineHeight:27
    },
    boldTitle: {
        fontWeight:"bold",
    },
    leftTitle: {
        flex: 3.5,
        // backgroundColor:"red"
    },
    rightText: {
        flex: 5,
        textAlign: "right",
        marginRight: 10
    },
    blockButton: {
        paddingVertical:8,
        width: 120,
        backgroundColor: ButtonColor.REJECTION,
        borderRadius: 10
    },
    backgroundSelectedCart: {
        backgroundColor: LIGHT_COLOR
    },
    backgroundNonSelected: {
        backgroundColor: "#fff"
    }
})