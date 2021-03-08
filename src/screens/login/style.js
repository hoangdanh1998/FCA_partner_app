import { StyleSheet } from 'react-native';
import { BACKGROUND_COLOR, HEADER_FONT_SIZE } from '../../constance/constance';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "space-evenly",
        alignItems:"center",
        
        
    },

    logo: {
        width:1070,
        height: 350,
        resizeMode: "stretch"
    },

    form: {
        marginTop: 15,
        
    },
    inputForm: {
        flexDirection: "row",
        width: "25%",
        
        borderBottomWidth: 1,
        borderBottomColor: BACKGROUND_COLOR,
        paddingBottom: 5
    },

    titleText: {
        fontSize: HEADER_FONT_SIZE,
        color: BACKGROUND_COLOR
    },

    textInput: {
        // flex: 1,
        width: "84%",
    
        paddingLeft: 10,
        
    },
    button: {
        width:175,
        backgroundColor: BACKGROUND_COLOR,
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

    buttonBody: {
        width:"25%",
        flexDirection: "row",
        justifyContent:"space-between",
        marginTop: 10
        
    },

    errorMessage: {
        color: "red",
        marginTop: 20
    },
    centered: {
        flex: 1,
        alignItems:"center",
        justifyContent: "center"
    },
})