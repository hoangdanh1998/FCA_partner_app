import { StyleSheet } from 'react-native';
import { ButtonColor } from '../../../constance/constance';


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
    }

})