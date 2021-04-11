import { StyleSheet } from 'react-native';
import { HEADER_FONT_SIZE } from '../../../constance/constance';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    infoItem: {
        alignSelf:"center",
        backgroundColor:"red",
        // alignItems: "center",
        flexDirection: "row",
    },
    rowContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        // backgroundColor:"red",
        flex: 1,

    },
    itemStatus: {
        // flex:1,
        // backgroundColor:"red",
        alignSelf: "center",
        alignItems: "center",
        flex: 1,
    },
    title: {
        fontSize: HEADER_FONT_SIZE,
        // flex: 1,
    }

})