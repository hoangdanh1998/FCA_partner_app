import { Body, Button, Header, Left, Right, Title } from "native-base";
import React from "react";
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux';
import { styles } from "./stytle";


export const MyHeader = (props) => {
    // console.log("header:", props);
    const partner = useSelector(state => state.account.partner);
    // console.log("partner header:", partner);
    console.log("props my header: ", props.handleLogOut);
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