import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { styles } from './style'

const ErrorModal = (props) => {
    return (
        <View style={styles.centered}>
            <Text style={styles.error_message}>Hiện tại hệ thống đang gặp vấn đề</Text>
            <TouchableHighlight
                onPress={props.loadOrderList}
                underlayColor={"#D5E8D4"}
                activeOpacity={0.9}
                style={styles.button}
            >
                <Text style={[styles.text, styles.textButton, styles.boldText]}>
                    Thử lại
    </Text>
            </TouchableHighlight>
        </View>
    );
}

export default ErrorModal;

