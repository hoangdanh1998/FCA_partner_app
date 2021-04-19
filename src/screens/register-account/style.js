import { StyleSheet } from 'react-native';
import { BACKGROUND_COLOR, HEADER_FONT_SIZE } from '../../constance/constance';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:"2%"
    },

    rowContainer: {
        flex: 1,
        flexDirection: "row",
        marginTop: 15,
        


    },

    formContainer: {
        width: "50%",
        // backgroundColor: "red",
        alignSelf:"center",
    },

    labelText: {
        fontSize: HEADER_FONT_SIZE,
        width: "30%",
        textAlign: "left",
        fontWeight: "bold",
        alignSelf: "center"
    },

    titleText: {
        fontSize: HEADER_FONT_SIZE,
        color: BACKGROUND_COLOR
    },

    textInput: {
        // flex: 1,
        width: "60%",
        borderBottomWidth: 1,
        paddingLeft: 10,
        paddingVertical: 15,
        marginLeft: 20

    },

    requireText: {
        fontSize: HEADER_FONT_SIZE,
        alignSelf: "baseline",
        color: "red",
        alignSelf:"center"
    },
    thumbnail: {
        width: 100,
        height: 100,
        resizeMode: "cover",
    },
    button: {
        width:175,
        backgroundColor: BACKGROUND_COLOR,
        borderRadius: 30,
        padding:10,
        elevation: 2,
        alignItems:"center",
        marginBottom: "3%"
    },
    buttonText: {
        fontSize: 20,
        color: '#fff',
    },
    uploadButton: {
        borderWidth: 1,
        width: 100,
        height: 100,
        
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
    buttonContainer: {
        flex: 1,
        alignItems: "center",
    }, 
    errorMessage: {
        color: "red",
        // alignSelf: "center",
        width: "100%",
        // backgroundColor: "red",
        fontSize: 18,
        marginRight:0
    },

    flagButtonStyle: {
        width: 80
    },

    phoneInputStyle: {
        // height: 100,
        // backgroundColor:"red"
        fontSize: HEADER_FONT_SIZE
    },
    phoneInputContainer: {
        // backgroundColor:"red",
        width: "47%",
        fontSize: HEADER_FONT_SIZE
        // backgroundColor:"red",
        
    },
    textContainerStyle: {
        backgroundColor: "#fff",
        borderBottomWidth: 1,
        paddingHorizontal: 0
        
    },

    codeTextStyle: {
        fontSize: HEADER_FONT_SIZE
    },

    buttonModal: {
        backgroundColor: BACKGROUND_COLOR,
        width:170, 
        height: 50,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        borderRadius: 30
    },
    modalContainer: {
        flexDirection: "row",
        width:"60%",
        justifyContent: "space-evenly"
    }
})