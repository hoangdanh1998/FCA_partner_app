import {StyleSheet} from 'react-native';
import { HEADER_FONT_SIZE } from '../../constance/constance';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        fontWeight: 'bold',
        fontSize: HEADER_FONT_SIZE
    },

    title: {
        fontSize: HEADER_FONT_SIZE,
        lineHeight:30
    }
})