import { Body, Button, Header, Left, Right, Title } from "native-base";
import React from "react";
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux';
import { styles } from "./stytle";
import {DrawerActions } from '@react-navigation/native';


export const MyHeader = (props) => {
    const partner = useSelector(state => state.account.partner);
    const handleLogOut = props.handleLogOut;
    return (
        <Header
            noShadow
            style={styles.header}
        >

                {props.scene.route.name === "QRCODE"
                    ? <Left>
                        <Button transparent
                            onPress={() => props.navigation.goBack()}
                        >
                            <Icon
                                name="arrow-back"
                                style={styles.icon}
                            />
                        </Button>
                    </Left>
                    : <Left style={{ flexDirection: "row" }}>
                        <Button transparent
                            style={{ marginRight: 20 }}
                            onPress = {() => props.navigation.dispatch(DrawerActions.openDrawer())}
                        >
                            <Icon
                                name="menu"
                                style={styles.icon}
                            />
                        </Button>
                        <Button
                            transparent
                            onPress={() => handleLogOut()}
                            >
                            <MaterialCommunity
                                name="logout"
                                style={styles.icon}
                            />
                        </Button>
                    </Left>
                }

            <Body style={styles.title_header}>
                <Title >{partner?.name}</Title>
            </Body>
            <Right>
                <Button
                    transparent
                    onPress={() => props.navigation.navigate("QRCODE")}>
                    <Icon
                        name="qr-code"
                        style={styles.icon}
                    />
                </Button>


            </Right>
        </Header>

    );

}