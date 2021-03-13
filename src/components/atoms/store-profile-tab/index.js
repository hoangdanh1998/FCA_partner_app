import React from 'react';
import {
    View,
    Text,
    KeyboardAvoidingView,
    SafeAreaView,
    TouchableWithoutFeedback,
    ScrollView
} from 'react-native';
import { styles } from './style';

const StoreProfileTab = () => {
    return (
        <View style = {styles.container}>
            <View style={styles.centered}>
                <View style={styles.header}>
                    <Text style={styles.titleHeader}>Thông tin cửa hàng</Text>
                </View>
                <View style = {styles.formProfile}>
                    <View >
                        <Text style={styles.titleProfile}>Tên cửa hàng</Text>
                        <Text></Text>
                    </View>
                    <View >
                        <Text style={styles.titleProfile}>Số điện thoại</Text>
                        <Text></Text>
                    </View>
                    <View >
                        <Text style={styles.titleProfile}>Địa chỉ</Text>
                        <Text></Text>
                    </View>

                </View>
            </View>
        </View>

    )
}

export default StoreProfileTab;