import React from "react";
import {  Header, Title, Button, Left, Right, Body } from "native-base";
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from "./stytle";

export const MyHeader = (props) => {
        return (
                <Header 
                    noShadow
                    style={styles.header}
                >
                    <Left>
                        <Button transparent
                            onPress={() => props.navigation.navigate("DRAWER")}
                        >
                            <Icon 
                                name="menu" 
                                style={styles.icon}
                            />
                        </Button>
                    </Left>
                    <Body style={styles.title_header}>
                        <Title >FCA Store</Title>
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