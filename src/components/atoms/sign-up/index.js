import React from 'react';
import { Image, TextInput, Text, TouchableHighlight } from 'react-native'
import { Container, Content, Form, Item, Label, View } from 'native-base';
import { styles } from './style';



export default SignUp = () => {
    return (
        <Container>

            <Content contentContainerStyle={{ alignItems: "center", flexDirection: "column", }}>
                <Image
                    source={require('../../../assets/logo.png')}
                    style={{ width: 150, height: 150, marginVertical: 20 }}
                />
                <Form style={{ width: "80%", flexDirection: "column", marginTop:"2%"}}>
                    <Item fixedLabel style={styles.itemFormBorder}>
                        <Text style={[styles.titleFontSize, styles.labelStyle]}>Số điện thoại: </Text>
                        <TextInput
                            style={[styles.titleFontSize, styles.inputStyle]}
                            returnKeyLabel="phone"
                            placeholder="Nhập số điện thoại của bạn"
                            keyboardType="phone-pad"
                        />
                    </Item>
                    <Item fixedLabel style={styles.itemFormBorder}>
                        <Text style={[styles.titleFontSize, styles.labelStyle]}>Mật khẩu: </Text>
                        <TextInput
                            secureTextEntry={true}
                            style={[styles.titleFontSize, styles.inputStyle]}
                            placeholder="Nhập mật khẩu của bạn"

                        />
                    </Item>
                    <View style={{flexDirection:"column",alignItems:"center",}}>
                        <TouchableHighlight
                            onPress={() => {
                                
                            }}
                            underlayColor={"#e6f9ff"}
                            activeOpacity={0.9}
                            style={styles.button}
                        >
                            <Text style={[styles.titleFontSize, styles.textButton, styles.boldText]}>
                                Đăng nhập
                            </Text>
                        </TouchableHighlight>
                    </View>
                </Form>
            </Content>
        </Container>
    );
}