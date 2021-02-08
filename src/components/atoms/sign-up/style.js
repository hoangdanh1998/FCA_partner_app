import { StyleSheet } from 'react-native';
import { HEADER_FONT_SIZE } from '../../../constance/constance';

export const styles = StyleSheet.create({
    titleFontSize: {
        fontSize: HEADER_FONT_SIZE,
    },
    itemFormBorder: {
        borderBottomWidth: 0,
        flexDirection:"row",
        justifyContent:"center",
        width:"100%",
        marginBottom:"1%"
    },
    inputStyle: {
        borderWidth:1,
        marginBottom:"1%",
        borderColor: "black",
        borderRadius:15,
        paddingVertical: 5,
        paddingHorizontal:10,
        width:"45%"
        
    },
    labelStyle: {
        width: "18%",
    },
    button: {
        width:"75%",
        backgroundColor: "#66d9ff",
        borderRadius: 30,
        padding:10,
        elevation: 2,
        alignItems:"center",
    },
    boldText: {
        fontWeight: "bold"
    },
})