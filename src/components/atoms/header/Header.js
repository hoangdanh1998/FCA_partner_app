import React from "react";
import {  Header, Title, Button, Left, Right, Body } from "native-base";
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from "./stytle";

export const MyHeader = () => {
    
        return (
                <Header 
                    noShadow
                    style={styles.header}
                >
                    <Left>
                        <Button transparent>
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
                        <Button transparent>
                            <Icon 
                                name="qr-code" 
                                style={styles.icon}
                            />
                        </Button>
                    </Right>
                </Header>
            
        );
    
}