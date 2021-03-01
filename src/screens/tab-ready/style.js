import { StyleSheet } from 'react-native';
import { HEADER_FONT_SIZE } from '../../constance/constance';


export const styles = StyleSheet.create ({

    centered: {
        flex: 1,
        alignItems:"center",
        justifyContent: "center"
    },
    
    message: {
        fontSize: HEADER_FONT_SIZE,
        
    }
})