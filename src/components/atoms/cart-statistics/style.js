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
        margin: 10,
        marginHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-around",
        
    },   
    
    rowContainer: {
        flexDirection: "row",
        justifyContent: "flex-end",
        flex: 1
    },

    titleText: {
        fontSize: SizeOrderStatistic.STATUS_FONT_SIZE,
        textAlign: "right"
    },

    

})