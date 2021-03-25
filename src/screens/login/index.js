import React, { useState } from 'react';
import {
    ActivityIndicator,
    Image,
    KeyboardAvoidingView,
    SafeAreaView,
    ScrollView,
    Text,
    TextInput,
    TouchableHighlight,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { useDispatch, useSelector } from 'react-redux';
import { BACKGROUND_COLOR, LIGHT_COLOR, PRIMARY_COLOR } from '../../constance/constance';
import { changeError, login } from '../../redux/actions/account';
import { styles } from './style';

const Login = (props) => {

    const dispatch = useDispatch();

    const errMessage = useSelector(state => state.account.errMessage);

    const [data, setData] = useState({
        numberPhone: '',
        password: '',
        secureTextEntry: true,
        error: false,
        isLoading: false
    });

    

    // const storeToken = async (token) => {
    //     try {
    //         await AsyncStorage.setItem('@storage_Token', token)
    //     } catch (e) {
    //         console.error("error of store token", e);
    //     }
    // };
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

    const handleLogin = async (phone, password) => {
        try {
            setData({
                ...data,
                // error: false,
                isLoading: true
            })

            dispatch(changeError(null));

            if(phone.trim().length === 0 || password.trim().length === 0) {
                dispatch(changeError("Số điện thoại và mật khẩu là bắt buộc!"));
            } else {
                await dispatch(login(phone, password));
            }
            // props.navigation.navigate("HOME_STACK");

        } catch (error) {
            // setData({
            //     ...data,
            //     error: true,

            // })
            dispatch(changeError("Số điện thoại hoặc mật khẩu không hợp lệ"));
        }

        setData({
            ...data,
            isLoading: false,

        })
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    if (data.isLoading) {
        return (
            <View style={styles.centered}>
                <ActivityIndicator size="large" color={BACKGROUND_COLOR} />
            </View>
        )
    }


    return (
        <SafeAreaView style={{ flex: 1 }}>

            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior="height"
                enabled
            >
                <TouchableWithoutFeedback >
                    <ScrollView style={{ backgroundColor: LIGHT_COLOR }}>
                        <View style={styles.container}>
                            <Image
                                style={styles.logo}
                                source={require("../../assets/logo-tablet.png")} />
                            <View style={styles.form}>

                                <View style={{ ...styles.inputForm, marginTop: 25 }}>
                                    <Feather
                                        name="phone"
                                        color={BACKGROUND_COLOR}
                                        size={25}
                                    />
                                    <TextInput
                                        placeholder="Số điện thoại"
                                        placeholderTextColor="#666666"
                                        style={[styles.textInput, styles.titleText, { color: '#05375a', marginRight: 15 }]}
                                        autoCapitalize="none"
                                        keyboardType="phone-pad"
                                        defaultValue={data.numberPhone}
                                        onChangeText={(val) => handleChangePhone(val)}
                                    />
                                </View>
                                <View style={{ ...styles.inputForm, marginTop: 20 }}>
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
                                        defaultValue={data.password}
                                        secureTextEntry={data.secureTextEntry ? true : false}
                                        onChangeText={(val) => handleChangePassword(val)}
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
                            <View>
                                {errMessage!=null ?
                                    <Text style={[styles.titleText, styles.errorMessage,]}>{errMessage}</Text>
                                    : null}
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
                                    onPress = {() => {props.navigation.navigate("REGISTER_ACCOUNT")}}
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
                                style={{ ...styles.button, marginTop: 15 }}
                                underlayColor={PRIMARY_COLOR}
                                activeOpacity={0.9}
                                onPress={() => handleLogin(data.numberPhone, data.password)}
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