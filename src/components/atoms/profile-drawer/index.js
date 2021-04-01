import moment from 'moment';
import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { styles } from './style';

export default ProfileContentDrawer = () => {
    const partner = useSelector(state => state.account.partner);
    
    return (
        partner != null ?
        <View style = {styles.container}>
            <View>
                <Text style = {styles.nameStore}>{partner.name}</Text>
            </View>
            <View>
                {partner.isOpen ? 
                <Text style = {{...styles.isOpen, backgroundColor: "#82B366"}}>Mở cửa</Text>
                : <Text style = {{...styles.isOpen, backgroundColor: "#B85450"}}>Đóng cửa</Text>
            } 
            </View>
            <View style = {[styles.rowContainer]}>
                <Text style = {[styles.headerProfile]}>Số dư ví</Text>
                    <Text style={[styles.profileText]}>{partner.account.balance | '0'}</Text>

            </View>
            <View style = {[styles.rowContainer]}>
                <Text style = {[styles.headerProfile]}>Ngày hết hạn</Text>
                    <Text style={[styles.profileText]}> {partner.expirationDate ?
                        moment(partner.expirationDate).format('YYYY-MM-DD') : 'Chưa đăng ký'}</Text>
            </View>
            <View style = {[styles.rowContainer]}>
                <Text style = {[styles.headerProfile]}>Số điện thoại</Text>
        <Text style = {[styles.profileText]}>{partner.account.phone}</Text>

            </View>
            <View style = {[styles.rowContainer]}>
                <Text style = {[{flex: 4}, styles.headerProfile]}>Địa chỉ</Text>
                <Text style = {[{flex: 7}, styles.profileText, {textAlign: "right"}]}>
                    {partner.address.description}
                </Text>
            </View>
            

        </View>
        : null
    )
}