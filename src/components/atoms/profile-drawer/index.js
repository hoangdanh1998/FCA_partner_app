import React from 'react';
import { View, Text } from 'react-native';
import {styles} from './style';
import {useSelector} from 'react-redux';

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
                <Text style = {[styles.profileText]}>10 000 000</Text>

            </View>
            <View style = {[styles.rowContainer]}>
                <Text style = {[styles.headerProfile]}>Ngày hết hạn</Text>
                <Text style = {[styles.profileText]}>30-12-2021</Text>
            </View>
            <View style = {[styles.rowContainer]}>
                <Text style = {[styles.headerProfile]}>Số điện thoại</Text>
        <Text style = {[styles.profileText]}>{partner.account.phone}</Text>

            </View>
            <View style = {[styles.rowContainer]}>
                <Text style = {[{flex: 4}, styles.headerProfile]}>Địa chỉ</Text>
                <Text style = {[{flex: 7}, styles.profileText]}>
                    {partner.address.description}
                </Text>
            </View>
            

        </View>
        : null
    )
}