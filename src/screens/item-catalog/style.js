import { StyleSheet } from 'react-native';
import { BACKGROUND_COLOR, HEADER_FONT_SIZE } from '../../constance/constance';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    button: {
        paddingHorizontal: 15,
        backgroundColor: BACKGROUND_COLOR,
        borderColor: "#fff",
        alignSelf: "flex-end",
    },
    titleButton: {
        fontSize: 17,
        fontWeight: "bold",
        color: "#ffff"
    },
    buttonContainer: {
        width: "100%",
        paddingVertical: 20, 
        paddingRight: 40, 
        flexDirection: "row",
        justifyContent: "space-around"
    },
    radioContainer: {
        
    }
})