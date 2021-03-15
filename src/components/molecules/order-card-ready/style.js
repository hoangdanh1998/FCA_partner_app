import { StyleSheet } from "react-native";
import {BACKGROUND_COLOR, HEADER_FONT_SIZE} from '../../../constance/constance'

export const styles = StyleSheet.create({
    card: {
        flex: 1,
    },
    cardHeader: {
        flex: 1,
    },
    cardBody: {
        width: "100%",
        flexDirection: "row",
    },

    title_font_size: {
        fontSize: HEADER_FONT_SIZE
    },

    title_font_weight: {
        fontWeight: "bold",
    },

    title: {
        
        fontSize: 20,
    },
    // earlyEstimation: {
    //     color: "#000000",
    //     fontSize: 20,
    // },
    // lateEstimation: {
    //     color: "#ff6f00",
    //     fontSize: 20,
    // },
    item: {
        borderBottomColor: "#ffffff",
    },
    itemText: {
        fontSize: 20,
        color: "#000000",
    },
    icon: {
        color: "#000000",
        fontSize: 50,
    },
    list: {
        width: "100%",
    },
    button: {
        backgroundColor:BACKGROUND_COLOR
    },

    body_card_item: {
        justifyContent: "center",
        width:"100%",
        backgroundColor: "yellow"

    },
    status_order: {
        color: "red",
    },
    titleAlert: {
        fontSize: 25
    }
});
