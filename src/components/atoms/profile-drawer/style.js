import {  StyleSheet} from 'react-native';
import { BACKGROUND_COLOR, HEADER_FONT_SIZE, PROFILE_COLOR } from '../../../constance/constance';

export const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    rowContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 12
    },
    nameStore: {
        color: BACKGROUND_COLOR,
        fontSize: 35,
        fontWeight: "bold",
        
    },
    headerProfile: {
        fontSize: 17
    },
    profileText: {
        color: PROFILE_COLOR,
        fontSize: HEADER_FONT_SIZE
    },
    isOpen: {
        
        width: 70,
        fontWeight: "bold",
        borderRadius: 30,
        textAlign: "center",
        marginVertical: 5
    }
})