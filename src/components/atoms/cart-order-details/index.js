import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { Rating, AirbnbRating } from 'react-native-ratings';

export default function CartOrderDetails(props) {
    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <View style={[styles.rowContainer, {marginHorizontal:10, marginTop:20}]}>
                <View style={[styles.flex1]}>
                    <Text style={[styles.title, styles.boldTitle]}>
                        Thông tin khách hàng
                    </Text>
                    <View style={[styles.rowContainer]}>
                        <Text style={[styles.title, styles.leftTitle]}>
                            Tên
                        </Text >
                        <Text style={[styles.title, styles.rightText]}>
                            Phan Nguyễn Kim Anh
                        </Text>

                    </View>
                    <View style={[styles.rowContainer]}>
                        <Text style={[styles.title, styles.leftTitle]}>
                            Số điện thoại
                        </Text>
                        <Text style={[styles.title, styles.rightText]}>
                            0931794393
                        </Text>
                    </View>
                    <View style={{alignItems: 'center', marginTop:10}}>
                        <TouchableOpacity
                            style={[styles.blockButton]}
                        >
                            <Text style = {[styles.title, styles.boldTitle, {alignSelf: "center", color:"#fff"}]}>
                                Chặn
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[styles.flex1]}>
                    <Text style={[styles.title, styles.boldTitle]}>
                        Thông tin đơn hàng
                    </Text>
                    <View style={[styles.rowContainer]}>
                        <Text style={[styles.title]}>
                            Đánh giá
                        </Text>
                        <Rating
                            imageSize={22}
                            readonly={true}
                            // style={{ paddingVertical: 10 }}
                            startingValue={3.5}
                        />
                    </View>
                    <View style={[styles.rowContainer]}>
                        <Text style={{flex: 2}}>

                        </Text>
                        <Text style={[styles.title,{flex: 5}]}>
                            Thức uống ngon, Đóng gói đẹp, Giá hợp lí
                            Cho quán 5 sao luôn
                        </Text>
                    </View>
                </View>
                <View>

                </View>
            </View>
        </View>
    )
}
