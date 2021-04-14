import React, { useState, useEffect } from 'react'
import { View, Text, Image } from 'react-native';
import { styles } from './style';
import NumberFormat from 'react-number-format';
import { useDispatch } from 'react-redux'

import {
    Card,
    CardItem,
    Body,

} from 'native-base';
import { ButtonColor, itemStatus } from '../../../constance/constance';


export default function CartNewItem(props) {

    const dispatch = useDispatch();
    const item = props.item;

    const generateStatus = () => {
        switch (item.status) {
            case itemStatus.ACTIVE:
                return (
                    <Text style={{ ...styles.title, color: ButtonColor.ACCESSS }}>
                        Chấp nhận
                    </Text>
                )
            case itemStatus.ARCHIVE:
                return (
                    <Text style={{ ...styles.title, color: ButtonColor.REJECTION }}>
                        Từ chối
                    </Text>
                )
            case itemStatus.PROCESS:
                return (
                    <Text style={{ ...styles.title,}}>
                        Đang chờ
                    </Text>
                )
        }
    };

    


    return (
        <View style={styles.container}>
            <Card style={{ width: "80%" }}>
                <CardItem style={{ flex: 1 }}>
                    <View style={styles.rowContainer}>
                        <Image
                            source={{ uri: item.imageLink }}
                            style={{
                                width: 100,
                                height: 100,
                            }}
                        />

                        <Text style={{
                            ...styles.title, alignSelf: "center", flex: 1, textAlign: "center"
                        }}>
                            {item.name}</Text>
                        <NumberFormat
                            value={item.price}
                            displayType={"text"}
                            thousandSeparator={true}
                            renderText={(formattedValue) => (
                                <Text style={[styles.title,
                                { marginTop: 5, textAlign: "right", alignSelf: "center", flex: 1 }]}>
                                    {formattedValue} VNĐ
                                </Text>
                            )}
                        />

                        <View style={styles.itemStatus}>
                                    {generateStatus()}
                        </View>
                    </View>
                </CardItem>
            </Card>
        </View>
    )
}
