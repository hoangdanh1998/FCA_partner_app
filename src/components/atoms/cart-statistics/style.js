import { StyleSheet } from 'react-native';
import { ButtonColor, HEADER_FONT_SIZE, SizeOrderStatistic } from '../../../constance/constance';


export const styles = StyleSheet.create({
    
    container: {
        flex:1,
        // alignItems: "flex",
        // backgroundColor: ButtonColor.LIGHT_ACCESS,
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "#fff",
        margin:10
    },   
    
    rowContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
    },

    titleText: {
        fontSize: SizeOrderStatistic.STATUS_FONT_SIZE
    },

    

})