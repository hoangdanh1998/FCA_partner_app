import { StyleSheet } from 'react-native';
import { BACKGROUND_COLOR, HEADER_FONT_SIZE } from '../../../constance/constance';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        // backgroundColor:"red"
    },
    modalView: {
        width:"80%",
        height: 600,
        marginVertical:10,
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 20,
        alignItems: "center",
        borderColor: "black",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    header: {
        color:"#fff",
        fontSize:20
    },
    headerContainer: {
        backgroundColor: BACKGROUND_COLOR,
        width:"100%",
        alignItems: "center",
        paddingVertical:10
    },
    title: {
        fontSize:HEADER_FONT_SIZE
    },
    rowContainer: {
        flexDirection:"row",
        width:"60%",
        marginTop: 20,
        // backgroundColor:"red"
    },
    formContainer: {
        width:"100%",
        // backgroundColor:"red",
        alignItems: "center",
        alignSelf:"center"
    },
    textInput: {
        width: "50%",
        padding: 10,
        borderWidth: 1,
    },
    labelTextInput: {
        textAlign: "left",
        alignSelf: "center", 
        width: "25%"
    },
    requireText: {
        fontSize: HEADER_FONT_SIZE,
        alignSelf: "baseline",
        color: "red",
        alignSelf:"center",
        marginRight:2
    },

    uploadButton: {
        borderWidth: 1,
        width: 100,
        height: 100,
        
    },
    textButton: {
        color:"#fff"
    },

})