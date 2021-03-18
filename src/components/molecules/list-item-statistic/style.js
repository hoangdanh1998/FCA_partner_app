import { StyleSheet } from 'react-native';
import { ButtonColor, HEADER_FONT_SIZE } from '../../../constance/constance';


export const styles = StyleSheet.create({

    container: {
        width: "85%",
        marginTop: 20,
        backgroundColor: ButtonColor.LIGHT_ACCESS,
        paddingVertical: 20
    },  

    
    
    rowContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },  

    cardCancelItem:{
        width: "85%", 
    },
    cancelItemList: {
        flexDirection: "row",
        justifyContent: "flex-end",
        flex:1,
        // backgroundColor: "blue"
    },

    cancelTextItem: {
        fontSize: HEADER_FONT_SIZE,

    }

})