import { StyleSheet } from 'react-native';
import { LIGHT_COLOR, HEADER_FONT_SIZE } from '../../../constance/constance';

export const styles = StyleSheet.create({
    button: {
        backgroundColor:LIGHT_COLOR,
        paddingHorizontal: 24
    },
    title: {
        fontSize: HEADER_FONT_SIZE
    },
    backgroundSelectedCart: {
        backgroundColor: LIGHT_COLOR
    },
    backgroundNonSelected: {
        backgroundColor: "#fff"
    },
    titleAlert: {
        fontSize: 25
    },
    title_font_size: {
        fontSize: HEADER_FONT_SIZE
    }

})