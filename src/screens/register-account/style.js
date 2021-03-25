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
        width: "80%",

    },

    labelText: {
        fontSize: HEADER_FONT_SIZE,
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
        paddingVertical: 12,
        marginLeft: 20

    },

    requireText: {
        fontSize: HEADER_FONT_SIZE,
        alignSelf: "baseline",
        color: "red"
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
        alignSelf: "center",
        width: "50%",
        // backgroundColor: "red",
        fontSize: HEADER_FONT_SIZE,
        marginRight:15
    }
})