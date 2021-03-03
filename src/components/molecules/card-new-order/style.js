import { StyleSheet } from 'react-native';
import { HEADER_FONT_SIZE, TITLE_FONT_SIZE } from '../../../constance/constance';

export const styles = StyleSheet.create({
    container: {
        width: "99%",
        
    },

    rowDirection: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
    
    },

    boldText: {
        fontWeight: "bold"
    },
    text: {
        fontSize: TITLE_FONT_SIZE
    },

    buttonBody: {
        width:"100%",
        flexDirection: "row",
        justifyContent:"space-around",
        
    },
    button: {
        width:100,
        backgroundColor: "#82B366",
        // borderRadius: 30,
        padding:5,
        elevation: 2,
        alignItems:"center",
        justifyContent:"center",
        height:60,
        
    },
    textButton: {
        color:"#fff"
    },
    boldText: {
        fontWeight: "bold"
    },

    borderItem: {
        
        borderRadius: 8, 
        borderStyle:"solid", 
        borderWidth: 1,  
        padding: 5
    },
    

})