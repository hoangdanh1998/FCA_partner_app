import React, { useState } from 'react'
import {
    View,
    Text,
    Image,
    TextInput,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    ScrollView,
    SafeAreaView,
    TouchableOpacity,
    TouchableHighlight,
    ImageBackground
} from 'react-native';
import { styles } from './style';
import Feather from 'react-native-vector-icons/Feather'
import { BACKGROUND_COLOR, PRIMARY_COLOR } from '../../constance/constance';


const Login = () => {

    const [data, setData] = React.useState({
        numberPhone: '',
        password: '',
        secureTextEntry: true,
    });


    const handleChangePhone = (phone) => {
        setData(
            {
                ...data,
                numberPhone: phone
            }
        )
    }

    const handleChangePassword = (password) => {
        setData({
            ...data,
            password: password
        })
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior="height"
                enabled
            >
                <TouchableWithoutFeedback >
                    <ScrollView style={{ backgroundColor: "#e6d7ab" }}>
                        <View style={styles.container}>
                            <Image
                                style={styles.logo}
                                source={require("../../assets/logo-tablet.png")} />
                            <View style={styles.form}>

                                <View style={{ ...styles.inputForm, marginTop: 25}}>
                                    <Feather
                                        name="phone"
                                        color={BACKGROUND_COLOR}
                                        size={25}
                                    />
                                    <TextInput
                                        placeholder="Số điện thoại"
                                        placeholderTextColor="#666666"
                                        style={[styles.textInput, styles.titleText, { color: '#05375a', marginRight:15 }]}
                                        autoCapitalize="none"
                                        keyboardType = "phone-pad"
                                        onChangeText = {(val) => handleChangePhone(val)}
                                    />
                                </View>
                                <View style={{ ...styles.inputForm, marginTop: 15 }}>
                                    <Feather
                                        name="lock"
                                        color={BACKGROUND_COLOR}
                                        size={20}
                                    />
                                    <TextInput
                                        placeholder="Nhập mật khẩu"
                                        placeholderTextColor="#666666"
                                        style={[styles.textInput, styles.titleText, { color: '#05375a' }]}
                                        autoCapitalize="none"
                                        secureTextEntry={data.secureTextEntry ? true : false}
                                        onChangeText = {(val) => handleChangePassword(val)}
                                    />
                                    <TouchableOpacity
                                        onPress={updateSecureTextEntry}
                                    >
                                        {data.secureTextEntry ?
                                            <Feather
                                                name="eye"
                                                color="grey"
                                                size={20}
                                            />
                                            :
                                            <Feather
                                                name="eye-off"
                                                color="grey"
                                                size={20}
                                            />
                                        }
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.buttonBody}>
                                <TouchableHighlight

                                    style={{ color: "blue" }}

                                    underlayColor={PRIMARY_COLOR}
                                    activeOpacity={0.9}
                                >
                                    <Text style={[styles.text, styles.textButton, styles.boldText, { color: "#1c8df8", marginTop: 10 }]}>
                                        Quên mật khẩu?
                                    </Text>
                                </TouchableHighlight>

                                <TouchableHighlight

                                    style={{ color: "blue" }}

                                    underlayColor={PRIMARY_COLOR}
                                    activeOpacity={0.9}
                                >
                                    <Text style={[styles.text, styles.textButton, styles.boldText, { color: "#1c8df8", marginTop: 10 }]}>
                                        Đăng ký
                                    </Text>
                                </TouchableHighlight>
                            </View>
                            <TouchableHighlight
                                style={{ ...styles.button, marginTop: 15}}
                                underlayColor={PRIMARY_COLOR}
                                activeOpacity={0.9}
                            >
                                <Text style={[styles.text, styles.textButton, styles.boldText]}>
                                    Đăng nhập
                                    </Text>
                            </TouchableHighlight>
                        </View>
                    </ScrollView>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>



        </SafeAreaView>

    );
};

export default Login;