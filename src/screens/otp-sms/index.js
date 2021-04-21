import {
    FirebaseRecaptchaVerifierModal
} from "expo-firebase-recaptcha";
import React, { useEffect, useRef, useState } from "react";
import {
    Animated, KeyboardAvoidingView, SafeAreaView, Text,
    TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, View
} from "react-native";
import AwesomeAlert from "react-native-awesome-alerts";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import OTPInput from "react-native-otp-textinput";
import { useDispatch } from 'react-redux';
import { registerAccount } from '../../redux/actions/account';
import firebase from "../../service/firebase/firebase-authentication";
import { styles } from "./style";

export default function OtpSmsScreen(props) {

    const dispatch = useDispatch();
    // console.log("props of otp:", props);
    const newAccount = props.route.params.newAccount.newAccount;
    const numberPhoneValue = props.route.params.numberPhoneValue;
    const numberPhone = newAccount.numberPhone;
    const password = newAccount.password;

    // console.log("numberphone value", numberPhoneValue);

    const [duration, setDuration] = useState(180);
    const [isShowButton, setIsShowButton] = useState(false);
    const [key, setKey] = useState(0);
    const recaptchaVerifier = useRef(null);
    const [verificationId, setVerificationId] = useState();
    const [isShowAlert, setIsShowAlert] = useState(false);
    const [visible, setVisible] = useState(false);

    const showAlert = () => {
        console.log("hien alert len");
        setIsShowAlert(true);
    };

    const hideAlert = () => {
        setIsShowAlert(false);
    };

    const onComplete = () => {
        setIsShowButton(true);
    };

    const handleTextChange = (text) => {
        if (text.length === 6) {
            confirmCode(text);
        }
    };

    const handleReSendOtp = () => {
        setIsShowButton(false);
        sendVerification();
        setKey((preventKey) => preventKey + 1);
        console.log("hello");
    };

    const sendVerification = () => {
        try {
            const phoneProvider = new firebase.auth.PhoneAuthProvider();
            phoneProvider
                .verifyPhoneNumber(numberPhoneValue, recaptchaVerifier.current)
                .then(setVerificationId).catch(error => { console.error(error); });
            console.log("send success");
        } catch (error) {
            console.error("err sendVerification: ", error);
        }

    };

    const confirmCode = (code) => {
        try {
            const credential = firebase.auth.PhoneAuthProvider.credential(
                verificationId,
                code
            );
            firebase
                .auth()
                .signInWithCredential(credential)
                .then((result) => {
                    dispatch(registerAccount(
                        { numberPhone, password },
                        newAccount.storeName,
                        newAccount.selectedImage,
                        newAccount.address));

                    // alert('Đăng ký thành công');
                    props.navigation.navigate('LOGIN');
                    // console.log(result);
                }).catch(error => {
                    console.error(error);
                    alert('Mã xác thực không chính xác')
                });
        } catch (error) {
            showAlert();
            console.error("confirm code err: ", error);
        }
    }

    useEffect(() => {
        sendVerification();
    }, []);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
            <AwesomeAlert
                show={isShowAlert}
                showProgress={false}
                title="Thông báo"
                message="Mã xác thực không chính xác"
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showConfirmButton={true}
                titleStyle={[styles.titleAlert, styles.boldText]}
                messageStyle={[styles.title_font_size]}
                confirmText="OK"
                confirmButtonColor="#DD6B55"
                onDismiss={() => { hideAlert() }}
                onConfirmPressed={() => {
                    hideAlert();
                }}
                confirmButtonTextStyle={[styles.title_font_size, styles.boldText]}
            />
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior="height"
                enabled
            >
                <TouchableWithoutFeedback>
                    <View style={styles.container}>
                        <FirebaseRecaptchaVerifierModal
                            ref={recaptchaVerifier}
                            firebaseConfig={firebase.app().options}
                            title="Xác thực số điện thoại"
                            languageCode = "vi"
                        />
                        <View style={styles.formContainer}>
                            <View>
                                <Text style={[styles.title, { fontWeight: 'bold', fontSize: 25 }]}>Xác nhận mã OTP</Text>
                            </View>
                            <View style={{ marginTop: "2%" }}>
                                <Text style={styles.title}>
                                    Một mã xác nhận gồm 6 số đã được gửi đến
                                </Text>
                                <Text style={styles.title}>số điện thoại
                                    <Text> {newAccount.numberPhone}</Text>
                                </Text>

                            </View>
                            <View style={styles.marginContainer}>
                                <View>
                                    <Text style={styles.title}>
                                        Nhập mã để tiếp tục
                                </Text>
                                </View>
                                <OTPInput
                                    inputCount={6}
                                    handleTextChange={text => { handleTextChange(text) }}

                                />
                            </View>

                            <View style={[styles.rowContainer, styles.marginContainer, { justifyContent: "center" }]}>
                                <Text style={[styles.title, { marginTop: 5 }]}>Bạn không nhận được mã ? </Text>

                                {
                                    isShowButton
                                        ? (<TouchableOpacity
                                            onPress={() => { handleReSendOtp() }}
                                            style={{ width: 100, height: 50 }}
                                        >
                                            <Text style={[[styles.title, { marginRight: 5, color: "#004777", marginTop: 5 }]]}> Gửi lại</Text>
                                        </TouchableOpacity>)
                                        : <Text style={[[styles.title, { marginRight: 5, marginTop: 5 }]]}> Gửi lại sau</Text>
                                }

                                <CountdownCircleTimer
                                    key={key}
                                    isPlaying
                                    duration={duration}
                                    strokeWidth={0}
                                    size={38}
                                    onComplete={onComplete}
                                    colors={[
                                        ['#004777', 1],

                                    ]}
                                >
                                    {({ remainingTime, animatedColor }) => {

                                        return (

                                            <Animated.Text style={{ color: animatedColor, fontSize: 22 }}>
                                                {remainingTime}
                                            </Animated.Text>
                                        )
                                    }}
                                </CountdownCircleTimer>

                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>

        </SafeAreaView>

    )
}
