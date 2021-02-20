import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import {useDispatch} from 'react-redux';
import { setOrderStatus } from '../../../redux/action/order-list';
import {OrderStatus} from '../../../constance/constance'


export default function QRCode(props) {
    
    const dispatch = useDispatch();

    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        dispatch(setOrderStatus(data, OrderStatus.RECEPTION));
        alert(data);
    };

    if (hasPermission === null) {
        return <Text>Hệ thống yêu cầu quyền truy cập máy ảnh</Text>;
    }
    if (hasPermission === false) {
        return <Text>Ứng dụng chưa có quyền truy cập camera</Text>;
    }

    return (
        <View style={styles.container}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />
            {scanned && props.navigation.navigate("READY")}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
});
