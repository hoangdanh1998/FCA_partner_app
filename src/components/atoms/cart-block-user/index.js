import { Button, Card, CardItem } from 'native-base'
import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native';
import { styles } from './style';
import { useDispatch, useSelector } from 'react-redux';
import AwesomeAlert from 'react-native-awesome-alerts';
import { ButtonColor, HEADER_FONT_SIZE } from '../../../constance/constance';
import { blockCustomer } from '../../../redux/actions/account';


export default function CartBlockUser(props) {
    const dispatch = useDispatch();

    const bannedCustomers = useSelector(state => state.account.bannedCustomers);
    const partner = useSelector(state => state.account.partner);

    const [isShowAlert, setIsShowAlert] = useState(false);

    const { customer } = props;

    const showAlert = () => {
        setIsShowAlert(true);
    };

    const hideAlert = () => {
        setIsShowAlert(false);
    };
    return (
        <Card style={{ width: "90%", alignSelf: "center", marginTop: 30 }}>
            <AwesomeAlert
                show={isShowAlert}
                showProgress={false}
                title="Xác nhận"
                message={`Bạn chắc muốn bỏ chặn khách hàng ${customer?.phone}\nNếu bỏ chặn, khách hàng này có thể đặt hàng với cửa hàng của bạn`}
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showCancelButton={true}
                showConfirmButton={true}
                cancelText="Huỷ"
                titleStyle={[styles.titleAlert, styles.boldTitle]}
                messageStyle={{ fontSize: HEADER_FONT_SIZE}}
                confirmText="Đồng ý"
                confirmButtonColor={ButtonColor.REJECTION}
                onCancelPressed={
                    () => {
                        hideAlert();
                    }
                }
                onDismiss={() => {
                    hideAlert();
                }}
                onConfirmPressed={
                    async () => {
                        await dispatch(blockCustomer(partner?.id, customer?.id, false));
                        hideAlert();
                    }}
                confirmButtonTextStyle={[styles.title_font_size, styles.boldTitle]}
                cancelButtonTextStyle={[styles.title_font_size, styles.boldTitle,]}
            />
            <CardItem style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <View>
                    <Text style={styles.title}>
                        {customer?.name}
                    </Text>
                </View>
                <View>
                    <Text style={styles.title}>
                        {customer?.phone}
                    </Text>
                </View>
                <View>
                    <Button
                        style={styles.button}
                        onPress={() => { showAlert() }}
                    >
                        <Text style={styles.title}>Bỏ chặn</Text>
                    </Button>
                </View>
            </CardItem>
        </Card>
    )
}
