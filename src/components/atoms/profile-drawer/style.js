import {  StyleSheet} from 'react-native';
import { HEADER_FONT_SIZE, PROFILE_COLOR } from '../../../constance/constance';

export const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    rowContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 5
    },
    nameStore: {
        color: PROFILE_COLOR,
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center"
    },
    headerProfile: {
        fontSize: 17
    },
    profileText: {
        color: PROFILE_COLOR,
        fontSize: HEADER_FONT_SIZE
    },
    isOpen: {
        backgroundColor: "#82B366",
        width: 70,
        fontWeight: "bold",
        borderRadius: 30,
        textAlign: "center",
        marginVertical: 5
    }
})