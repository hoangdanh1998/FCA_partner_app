import React from 'react';
import { View, Text } from 'react-native';
import {styles} from './style';
import {useSelector} from 'react-redux';

export default ProfileContentDrawer = () => {

    return (
        <View style = {styles.container}>
            <View>
                <Text style = {styles.nameStore}>Cà phê sân vườn Misona</Text>
            </View>
            <View>
                <Text style = {[styles.isOpen]}>Mở cửa</Text>
            </View>
            <View style = {[styles.rowContainer]}>
                <Text style = {[styles.headerProfile]}>Số dư ví</Text>
                <Text style = {[styles.profileText]}>10 000 000</Text>

            </View>
            <View style = {[styles.rowContainer]}>
                <Text style = {[styles.headerProfile]}>Số điện thoại</Text>
                <Text style = {[styles.profileText]}>0399193913</Text>

            </View>
            <View style = {[styles.rowContainer]}>
                <Text style = {[{flex: 4}, styles.headerProfile]}>Địa chỉ</Text>
                <Text style = {[{flex: 7}, styles.profileText]}>Khu dân cư Tân Chánh Hiệp,
                    Gần chợ Hóc Môn, đi thẳng khoảng 500m gần 
                    
                </Text>
            </View>
            <View style = {[styles.rowContainer]}>
                <Text style = {[styles.headerProfile]}>Ngày hết hạn</Text>
                <Text style = {[styles.profileText]}>30-12-2021</Text>
            </View>

        </View>
    )
}