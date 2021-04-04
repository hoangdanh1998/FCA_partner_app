import React, { useRef, useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { styles } from "./style";
import OTPInput from "react-native-otp-textinput";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { Animated } from "react-native";
// import firebase from "../../service/firebase/firebase-authentication";
import * as firebase from "firebase";
import {
  FirebaseRecaptcha,
  FirebaseRecaptchaBanner,
  FirebaseRecaptchaVerifier,
  FirebaseRecaptchaVerifierModal,
  FirebaseAuthApplicationVerifier,
} from "expo-firebase-recaptcha";

export default function OtpSmsScreen(props) {
  const newAccount = props.route.params.newAccount.newAccount;

  const [duration, setDuration] = useState(10);
  const [isShowButton, setIsShowButton] = useState(false);
  const [key, setKey] = useState(0);
  const [verificationCode, setVerificationCode] = useState();
  const recaptchaVerifier = useRef(null);
  const [verificationId, setVerificationId] = useState();
  const [onPressed, setOnPressed] = useState(false);
  const attemptInvisibleVerification = true;

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
        .verifyPhoneNumber(newAccount.numberPhone, recaptchaVerifier.current)
        .then(setVerificationId);
      console.log("send success");
    } catch (error) {
      console.error("err sendVerification: ", error);
    }
  };

  const confirmCode = (code) => {
    console.log("verificationId", verificationId);
    try {
      const credential = firebase.auth.PhoneAuthProvider.credential(
        verificationId,
        code
      );
      firebase
        .auth()
        .signInWithCredential(credential)
        .then((result) => {
          console.log(result);
        });
    } catch (error) {
      console.error("confirm code err: ", error);
    }
  };

  // useEffect(() => {
  //   async function onUseEffect() {
  //     console.log("onUseEffect");
  //     if (onPressed) await sendVerification();
  //   }
  //   onUseEffect();
  // }, [onPressed]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="height" enabled>
        <TouchableWithoutFeedback>
          <View style={styles.container}>
            <View style={styles.formContainer}>
              <View>
                <Text
                  style={[styles.title, { fontWeight: "bold", fontSize: 25 }]}
                >
                  Xác nhận mã OTP
                </Text>
              </View>
              <View style={{ marginTop: "2%" }}>
                {/* <Text style={styles.title}>
                  Một mã xác nhận gồm 6 số đã được gửi đến
                </Text>
                <Text style={styles.title}>
                  số điện thoại
                  <Text>{newAccount.numberPhone}</Text>
                </Text> */}
                <Text>Gửi mã xác nhận đến {newAccount.numberPhone}</Text>
                <Button
                  title="Gửi"
                  onPress={() => {
                    setOnPressed(true);
                    sendVerification();
                  }}
                />
              </View>
              {onPressed ? (
                <View style={styles.marginContainer}>
                  <View>
                    <Text style={styles.title}>Nhập mã để tiếp tục</Text>
                  </View>
                  <OTPInput
                    inputCount={6}
                    handleTextChange={(text) => {
                      handleTextChange(text);
                    }}
                  />
                </View>
              ) : null}

              <View
                style={[
                  styles.rowContainer,
                  styles.marginContainer,
                  { justifyContent: "center" },
                ]}
              >
                <Text style={styles.title}>Bạn không nhận được mã ? </Text>

                {isShowButton ? (
                  <TouchableHighlight
                    onPress={() => {
                      console.log("click");
                      handleReSendOtp();
                    }}
                    style={{ backgroundColor: "red", width: 100, height: 50 }}
                  >
                    <Text
                      style={[
                        [styles.title, { marginRight: 5, color: "#004777" }],
                      ]}
                    >
                      {" "}
                      Gửi lại
                    </Text>
                  </TouchableHighlight>
                ) : (
                  <Text style={[[styles.title, { marginRight: 5 }]]}>
                    {" "}
                    Gửi lại sau
                  </Text>
                )}

                <CountdownCircleTimer
                  key={key}
                  isPlaying
                  duration={duration}
                  strokeWidth={0}
                  size={28}
                  onComplete={onComplete}
                  colors={[["#004777", 1]]}
                >
                  {({ remainingTime, animatedColor }) => {
                    return (
                      <Animated.Text
                        style={{ color: animatedColor, fontSize: 22 }}
                      >
                        {remainingTime}
                      </Animated.Text>
                    );
                  }}
                </CountdownCircleTimer>
              </View>
            </View>
            {onPressed ? (
              <FirebaseRecaptchaVerifierModal
                ref={recaptchaVerifier}
                firebaseConfig={firebase.app().options}
                attemptInvisibleVerification={attemptInvisibleVerification}
              />
            ) : null}
            {attemptInvisibleVerification && <FirebaseRecaptchaBanner />}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
