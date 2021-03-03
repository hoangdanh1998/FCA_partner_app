import { StyleSheet } from 'react-native';
import { HEADER_FONT_SIZE } from '../../../constance/constance';

export const styles = StyleSheet.create({
    centeredView: {
        justifyContent: "center",
        alignItems: "center",
    },

    containerView: {
        flex: 1,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    modalView: {
        
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width:"88%",
        height: "75%"
    },

    buttonBody: {
        width:"100%",
        flexDirection: "row",
        justifyContent:"space-evenly",
        marginTop: 15
        
    },
    button: {
        width:175,
        backgroundColor: "#82B366",
        borderRadius: 30,
        padding:10,
        elevation: 2,
        alignItems:"center",
    },
    textButton: {
        color:"#fff"
    },

    text: {
        fontSize: HEADER_FONT_SIZE
    },
    boldText: {
        fontWeight: "bold"
    },
});