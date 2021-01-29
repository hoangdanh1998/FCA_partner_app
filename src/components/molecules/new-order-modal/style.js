import { StyleSheet } from 'react-native';
import {HEADER_FONT_SIZE} from '../../../constance/constance'

export const styles = StyleSheet.create({

    centeredView: {
        justifyContent: "center",
        alignItems: "center",
    },

    containerView: {
        flex: 1,
    },

    modalView: {
        
        margin: 20,
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
        width:"50%",
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    cardWidth: {
        width:"100%"
    },

    text: {
        fontSize: HEADER_FONT_SIZE
    },
    buttonBody: {
        width:"100%",
        flexDirection: "row",
        justifyContent:"space-around",
        marginTop: 18,
    },
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
    }

});