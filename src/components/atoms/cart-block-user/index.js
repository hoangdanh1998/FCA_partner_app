import { Button, Card, CardItem } from 'native-base'
import React from 'react'
import { View, Text } from 'react-native';
import {styles} from './style';

export default function CartBlockUser() {
    return (
        <Card style = {{width: "90%", alignSelf: "center"}}>
            <CardItem style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <View>
                    <Text style={styles.title}>
                        Nguyen Van A
                    </Text>
                </View>
                <View>
                    <Text style={styles.title}>
                        09013713888
                    </Text>
                </View>
                <View>
                    <Button
                        style={styles.button}
                    >
                        <Text style = {styles.title}>Bỏ chặn</Text>
                    </Button>
                </View>
            </CardItem>
        </Card>
    )
}
