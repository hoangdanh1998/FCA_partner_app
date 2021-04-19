import React, { useState, useRef } from 'react';

import moment from "moment";
import * as firebase from "firebase";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  TouchableHighlight,
  ActivityIndicator,
  Modal
} from 'react-native';
import { styles } from './style'
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { BACKGROUND_COLOR, HEADER_FONT_SIZE, KEY_GOOGLE_MAP, PRIMARY_COLOR, StatisticColor } from '../../constance/constance';
import * as ImagePicker from 'expo-image-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useDispatch } from 'react-redux'
import { registerAccount } from '../../redux/actions/account';
import PhoneInput from "react-native-phone-number-input";
import { checkPhoneExisted } from '../../service/account/account';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const RegisterAccountScreen = (props) => {
  const dispatch = useDispatch();

  const [numberPhoneValue, setNumberPhoneValue] = useState("");
  const [valid, setValid] = useState(false);
  const phoneInput = useRef(PhoneInput);
  const [address, setAddress] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [data, setData] = useState({
    numberPhone: "",
    password: "",
    confirmPassword: "",
    storeName: "",
  });

  const [numberErr, setNumberErr] = useState(null);
  const [passwordErr, setPasswordErr] = useState(null);
  const [confirmPasswordErr, setConfirmPasswordErr] = useState(null);
  const [storeNameErr, setStoreNameErr] = useState(null);
  const [addressErr, setAddressErr] = useState(null);
  const [imageErr, setImageErr] = useState(null);
  const [isLoadingImage, setIsLoadingImage] = useState(false);

  let openImagePickerAsync = async () => {
    setIsLoadingImage(true);
    console.log("hello");
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log("picker image", pickerResult);
    if (pickerResult.cancelled) {
      if (!selectedImage)
        setSelectedImage(null);
      setIsLoadingImage(false);

    } else {
      const imageLink = await handleUploadImage(pickerResult.uri);
      setSelectedImage({ localUri: imageLink });

    }

    setImageErr(null);
    setIsLoadingImage(false);
  };


  const handleUploadImage = async (uri) => {
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        console.log(e);
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", uri, true);
      xhr.send(null);
    });

    const ref = firebase.storage().ref().child(uuidv4());
    // const ref = firebase.storage().ref().child(uuid.v4());
    const snapshot = await ref.put(blob);

    // We're done with the blob, close and release it
    blob.close();

    return await snapshot.ref.getDownloadURL();
  };

  const handleChangePhone = (numberPhone) => {

    setNumberErr(null);
    setData(
      {
        ...data,
        numberPhone: numberPhone
      }
    )
  }

  const checkValuePhoneNumber = async (numberPhone) => {

    const phoneReg = /^[0-9]+$/;

    if (!numberPhone.match(phoneReg)) {
      setNumberErr("Số điện thoại không hợp lệ");
      return false;
    } else {
      try {
        await checkPhoneExisted(numberPhone);
        setNumberErr("Số điện thoại đã được đăng ký");
        return false;
      } catch (error) {
        console.error("check phone exist err: ", error);
        return true;
      }

    }
  }

  const checkStoreName = (storeName) => {

    // const nameReg = /^[A-Za-z0-9]+$/;
    // console.log(storeName.match(nameReg));

    if (storeName.length === 0) {
      setStoreNameErr("Tên cửa hàng là bắt buộc");
      return false;
    } else {
      return true;
    }
  }

  const checkPassword = (password) => {


    const passReg = /^(?=.*\d+.*)(?=.*[A-Z]+.*)\w{8,20}$/;
    console.log("pass:", password.match(passReg));

    if (!password.match(passReg)) {
      setPasswordErr("Mật khẩu phải có ít nhất 8 kí tự, phải chứa chữ in hoa, chữ số, chữ thường");
      return false;
    } else {
      return true;
    }
  }

  const checkConfirmPassword = (confirmPassword) => {

    // const passReg = /^([A-Z]+[a-z]+[0-9]+){8,16}$/;
    // console.log("pass:",confirmPassword.match(passReg));

    if (confirmPassword !== data.password) {
      setConfirmPasswordErr("Xác nhận mật khẩu chưa chính xác")
      return false;
    } else {
      return true;
    }
  }

  const handleChangePassword = (password) => {
    setPasswordErr(null);
    setData({
      ...data,
      password: password
    })
  }

  const handleChangeConfirmPassword = (confirmPassword) => {
    setConfirmPasswordErr(null);
    setData({
      ...data,
      confirmPassword: confirmPassword
    })
  }

  const handleChangeStoreName = (storeName) => {
    setStoreNameErr(null);
    setData({
      ...data,
      storeName: storeName
    })
  }

  const handleRegisterAccount = (
    numberPhone,
    password,
    confirmPassword,
    storeName,
    image,
    address
  ) => {
    try {
      console.log("password", password);
      console.log("confirmPassword", confirmPassword);
      setNumberErr(null);
      setConfirmPasswordErr(null);
      setStoreNameErr(null);
      setImageErr(null);
      setAddressErr(null);
      setPasswordErr(null);

      const isNumberPhone = checkValuePhoneNumber(numberPhone);
      const isStoreName = checkStoreName(storeName);
      const isPassword = checkPassword(password);
      const isConfirmPass = checkConfirmPassword(confirmPassword);

      if (!image) {
        setImageErr("Hình ảnh cửa hàng là bắt buộc")
      } if (!address) {
        setAddressErr("Địa chỉ cửa hàng là bắt buộc");
      }
      if (isNumberPhone && isPassword && isStoreName
        && isConfirmPass && image && address
      ) {

        // console.log("bi loi roi ne");
        // dispatch(registerAccount(    
        //     {numberPhone: data.numberPhone, password: data.password},
        //     storeName, 
        //     selectedImage,
        //     address
        // ));
        let newAccount = null;
        const chars = numberPhone.split("");
        let phone = "";
        let phoneValue = "";
        if (chars[0] === "0") {
          phone = numberPhone.replace(/^0/, "");
          phone = "+84" + phone;

          newAccount = {
            numberPhone: data.numberPhone,
            password: data.password,
            storeName,
            selectedImage,
            address
          }
          props.navigation.navigate("OTP_SMS", { newAccount: { newAccount }, numberPhoneValue: phone });
        } else {
          console.log("so ko co so 0:", numberPhone);
          phone = "0" + numberPhone;
          newAccount = {
            numberPhone: phone,
            password: data.password,
            storeName,
            selectedImage,
            address
          }
          props.navigation.navigate("OTP_SMS", { newAccount: { newAccount }, numberPhoneValue: numberPhoneValue });
        }
      }
    } catch (error) {
      console.error(error);
    }
  }


  return (

    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: '#ffff' }}
      behavior="height"
      enabled
    >
      <TouchableWithoutFeedback>
        <ScrollView
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.container}>
            <View style={styles.formContainer}>

              <View style={{ flex: 1 }}>

                <View style={[styles.rowContainer]}>
                  <Text style={styles.requireText}>*</Text>
                  <Text style={[styles.labelText]}>
                    Tên cửa hàng
                                    </Text>
                  <TextInput
                    placeholder="Nhập tên cửa hàng"
                    placeholderTextColor="#666666"
                    style={[
                      styles.textInput,
                      styles.titleText,
                      { color: "#000", marginRight: 15 }]}
                    autoCapitalize="none"

                    defaultValue={data.storeName}
                    onChangeText={(val) => handleChangeStoreName(val)}
                  />
                </View>
                {storeNameErr
                  ? (<View style={{ ...styles.rowContainer, marginTop: 2 }}>
                    <></>
                    <Text style={[styles.errorMessage]}>
                      {storeNameErr}
                    </Text>
                  </View>)
                  : null
                }
                <View style={styles.rowContainer} >
                  <Text style={styles.requireText}>*</Text>
                  <Text style={[styles.labelText]}>
                    Số điện thoại
                                </Text>
                  <PhoneInput
                    ref={phoneInput}
                    defaultValue={data.numberPhone}
                    defaultCode="VN"
                    layout="first"
                    onChangeText={(text) => {
                      handleChangePhone(text);
                    }}
                    onChangeFormattedText={text => setNumberPhoneValue(text)}
                    // withDarkTheme
                    // withShadow
                    // autoFocus
                    containerStyle={styles.phoneInputContainer}
                    flagButtonStyle={styles.flagButtonStyle}
                    textInputStyle={styles.phoneInputStyle}
                    placeholder="Nhập số điện thoại"
                    textContainerStyle={styles.textContainerStyle}
                    codeTextStyle={styles.codeTextStyle}
                  />
                </View>
                {numberErr
                  ? (<View style={{ ...styles.rowContainer, marginTop: 2 }}>
                    <></>
                    <Text style={[styles.errorMessage]}>
                      {numberErr}
                    </Text>
                  </View>)
                  : null
                }
                <View style={[styles.rowContainer]}>
                  <Text style={styles.requireText}>*</Text>

                  <Text style={[styles.labelText]}>
                    Mật khẩu
                                </Text>
                  <TextInput
                    placeholder="Nhập mật khẩu"
                    placeholderTextColor="#666666"
                    style={[
                      styles.textInput,
                      styles.titleText,
                      { color: "#000", marginRight: 15, width: "28%" }]}
                    autoCapitalize="none"
                    secureTextEntry={true}
                    defaultValue={data.password}
                    onChangeText={(val) => handleChangePassword(val)}
                  />
                </View>
                {passwordErr
                  ? (<View style={{ ...styles.rowContainer, marginTop: 2 }}>
                    <></>
                    <Text style={[styles.errorMessage]}>
                      {passwordErr}
                    </Text>
                  </View>)
                  : null
                }
                <View style={[styles.rowContainer]}>
                  <Text style={styles.requireText}>*</Text>
                  <Text style={[styles.labelText,]}>
                    Xác nhận mật khẩu
                                </Text>
                  <TextInput
                    placeholder="Nhập lại mật khẩu"
                    placeholderTextColor="#666666"
                    style={[
                      styles.textInput,
                      styles.titleText,
                      { color: "#000", marginRight: 15, width: "28%" }]}
                    autoCapitalize="none"
                    // keyboardType="phone-pad"
                    secureTextEntry={true}
                    defaultValue={data.confirmPassword}
                    onChangeText={(val) => handleChangeConfirmPassword(val)}
                  />
                </View>
                {confirmPasswordErr
                  ? (<View style={{ ...styles.rowContainer, marginTop: 2 }}>
                    <></>
                    <Text style={[styles.errorMessage]}>
                      {confirmPasswordErr}
                    </Text>
                  </View>)
                  : null
                }
                <View style={[styles.rowContainer, { height: 100 }]}>
                  <Text style={styles.requireText}>*</Text>
                  <Text style={[styles.labelText]}>
                    Ảnh cửa hàng
                                    </Text>
                  <View style={{
                    width: "51.5%", marginLeft: 23,
                    flexDirection: "row",
                    justifyContent: "flex-start",
                  }}>
                    {selectedImage !== null
                      ? (
                        <TouchableOpacity
                          onPress={openImagePickerAsync}
                        >
                          {
                            isLoadingImage
                              ? <ActivityIndicator
                                size={25}
                                color="black"
                                style={{
                                  alignSelf: "center",
                                  width: 100,
                                  height: 100

                                }} />
                              : (<View style={{ marginRight: 15 }}>
                                <Image source={{ uri: selectedImage.localUri }} style={styles.thumbnail} />
                              </View>)
                          }

                        </TouchableOpacity>)

                      : <TouchableOpacity
                        style={[styles.uploadButton,]}
                        onPress={openImagePickerAsync}
                      >
                        <AntDesign
                          name="plus"
                          size={92}
                          style={{
                            flexDirection: "column",
                            alignSelf: "center",
                            color: StatisticColor.CANCELLATION
                          }}
                        />
                      </TouchableOpacity>
                    }


                  </View>

                </View>
                {imageErr
                  ? (<View style={{ ...styles.rowContainer, marginTop: 2 }}>
                    <></>
                    <Text style={[styles.errorMessage]}>
                      {imageErr}
                    </Text>
                  </View>)
                  : null
                }
                <View style={[styles.rowContainer,]}>
                  <View style={{
                    // justifyContent: "flex-end",
                    width: "30%",
                    flexDirection: "row",

                  }}>
                    <Text style={{ ...styles.requireText }}>*</Text>
                    <Text style={
                      {
                        ...styles.labelText,
                        width: "100%",
                        alignSelf: "baseline",
                        paddingVertical: 33
                      }

                    }
                    >
                      Địa chỉ cửa hàng
                                    </Text>
                  </View>
                  <GooglePlacesAutocomplete
                    id="GooglePlacesAutocomplete"
                    placeholder="Nhập địa chỉ cửa hàng"
                    minLength={2}
                    autoFocus={false}
                    autoCorrect={false}
                    listViewDisplayed="auto" // true/false/undefined
                    fetchDetails={true}
                    listViewDisplayed="auto"
                    keyboardShouldPersistTaps="handled"
                    onPress={async (data, details = null) => {
                      setAddress({
                        description: data.description,
                        latitude: details.geometry.location.lat,
                        longitude: details.geometry.location.lng,
                      });
                      setAddressErr(null);

                    }}
                    textInputProps={{
                      InputComp: TextInput,
                      multiline: true,

                    }}
                    numberOfLines={2}
                    query={{
                      key: KEY_GOOGLE_MAP,
                      components: "country:vn", //limit country
                    }}
                    styles={{
                      container: {
                        marginRight: 11,
                        marginLeft: 30
                      },
                      description: {
                        // fontWeight: "bold",
                        fontSize: HEADER_FONT_SIZE,
                      },
                      predefinedPlacesDescription: {
                        color: "#1faadb",
                      },
                      textInputContainer: {
                        backgroundColor: "rgba(0,0,0,0)",
                        width: "100%",

                      },
                      textInput: {
                        height: 100,
                        color: "#000",
                        fontSize: HEADER_FONT_SIZE,
                        borderWidth: 1,


                      },
                      listView: {
                        // backgroundColor: "rgba(192,192,192,0.9)",
                        backgroundColor: "#fff",
                        marginBottom: 0
                      },
                    }}
                  />
                </View>
                {addressErr
                  ? (<View style={{ ...styles.rowContainer, marginTop: 2 }}>
                    <></>
                    <Text style={[styles.errorMessage]}>
                      {addressErr}
                    </Text>
                  </View>)
                  : null
                }
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableHighlight
                style={{ ...styles.button, marginTop: 15 }}
                underlayColor={PRIMARY_COLOR}
                activeOpacity={0.9}
                onPress={

                  () => {
                    handleRegisterAccount(
                      data.numberPhone,
                      data.password,
                      data.confirmPassword,
                      data.storeName,
                      selectedImage,
                      address
                    )
                  }
                }
              >
                <Text style={[styles.text, styles.textButton, styles.boldText]}>
                  Đăng ký
                                    </Text>
              </TouchableHighlight>
            </View>
            {/* <Modal
              animationType="slide"
              transparent={true}
              visible={true}
              style={{ alignItems: "flex-end" }}
            >
              <View style={{ flex: 1, alignItems: "center", justifyContent: "flex-end" }}>
                <View style={{
                  width: "100%",
                  backgroundColor: "#F0F0F0",
                  height: 190,
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  <View style={styles.modalContainer}>
                    <TouchableOpacity>
                      <View style={styles.buttonModal}>
                        <AntDesign
                          name="camera"
                          size={30}
                          color="#fff"
                        />
                        <Text style={[styles.text, styles.boldText, { color: "#fff" }]} >Chụp Ảnh</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <View style={styles.buttonModal}>
                        <MaterialCommunityIcons
                          name="folder-image"
                          size={30}
                          color="#fff"
                        />
                        <Text style={[styles.text, styles.boldText, { color: "#fff" }]} >Chọn Ảnh</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity>
                    <Text style={[ styles.boldText, {marginTop:20, color: BACKGROUND_COLOR, fontSize:25}]}>Huỷ</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal> */}
          </View>

        </ScrollView>
      </TouchableWithoutFeedback>

    </KeyboardAvoidingView >

  )
};

export default RegisterAccountScreen;