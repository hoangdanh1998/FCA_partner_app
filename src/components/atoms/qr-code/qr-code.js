import { BarCodeScanner } from 'expo-barcode-scanner';
import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ALERT_FAIL_MESSAGE, ALERT_SUCCESS_MESSAGE, OrderStatus, TITLE_ALERT } from '../../../constance/constance';
import { setOrderStatus } from '../../../redux/actions/order-list';


export default function QRCode(props) {

    const dispatch = useDispatch();
    const partner = useSelector((state)=> state.account.partner);
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = async ({ type, data }) => {
        const orderId = data.split(',')[0];
        const partnerId = data.split(',')[1];
                setScanned(true);
        try {
            if (partnerId !== partner.id) {
                throw new Error();
            }
            await dispatch(setOrderStatus(orderId, OrderStatus.RECEPTION));
            if (!props?.route?.params?.nameScreen) {
                props.navigation.navigate("READY");
            } else {
                props.navigation.navigate("UPCOMING");
            }
            
            // Alert.alert(TITLE_ALERT,ALERT_SUCCESS_MESSAGE);
        } catch (error) {
            // Alert.alert(TITLE_ALERT,ALERT_FAIL_MESSAGE);
            await new Promise((resolve) => {
                return setTimeout(() => {
                    resolve()
                }, 3000);
            })
            setScanned(false);
        }
        
        
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
