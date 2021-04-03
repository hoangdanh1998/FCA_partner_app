import React, { useState } from "react";
import moment from "moment";
import * as firebase from "firebase";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
// import uuid from "uuid";
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
} from "react-native";
import { styles } from "./style";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import {
  HEADER_FONT_SIZE,
  KEY_GOOGLE_MAP,
  PRIMARY_COLOR,
  StatisticColor,
} from "../../constance/constance";
import * as ImagePicker from "expo-image-picker";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useDispatch } from "react-redux";
import { registerAccount } from "../../redux/actions/account";

const RegisterAccountScreen = (props) => {
  const dispatch = useDispatch();

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

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }
    const imageLink = await handleUploadImage(pickerResult.uri);
    setSelectedImage({ localUri: imageLink });
    setImageErr(null);
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
    setData({
      ...data,
      numberPhone: numberPhone,
    });
  };

  const handleChangePassword = (password) => {
    setPasswordErr(null);
    setData({
      ...data,
      password: password,
    });
  };

  const handleChangeConfirmPassword = (confirmPassword) => {
    setConfirmPasswordErr(null);
    setData({
      ...data,
      confirmPassword: confirmPassword,
    });
  };

  const handleChangeStoreName = (storeName) => {
    setStoreNameErr(null);
    setData({
      ...data,
      storeName: storeName,
    });
  };

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
      setPasswordErr(null);
      setConfirmPasswordErr(null);
      setStoreNameErr(null);
      setImageErr(null);
      setAddressErr(null);

      if (numberPhone.trim().length === 0) {
        setNumberErr("Số điện thoại là bắt buộc");
      }
      if (password.trim().length === 0) {
        setPasswordErr("Mật khẩu là bắt buộc");
      }
      if (password !== confirmPassword) {
        console.log("hello");
        setConfirmPasswordErr("Xác nhận mật khẩu chưa chính xác");
      }
      if (storeName.trim().length === 0) {
        setStoreNameErr("Tên cửa hàng là bắt buộc");
      }
      if (!image) {
        setImageErr("Hình ảnh cửa hàng là bắt buộc");
      }
      if (!address) {
        setAddressErr("Địa chỉ cửa hàng là bắt buộc");
      }
      if (
        !numberErr &&
        !passwordErr &&
        !confirmPasswordErr &&
        !storeNameErr &&
        !imageErr &&
        !addressErr
      ) {
        try {
          // dispatch(registerAccount(
          //     {numberPhone: data.numberPhone, password: data.password},
          //     storeName,
          //     selectedImage,
          //     address
          // ));

          const newAccount = {
            numberPhone: data.numberPhone,
            password: data.password,
            storeName,
            selectedImage,
            address,
          };

          props.navigation.navigate("OTP_SMS", { newAccount: { newAccount } });
        } catch (error) {
          console.error("create error", error);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#ffff" }}
      behavior="height"
      enabled
    >
      <TouchableWithoutFeedback>
        <ScrollView keyboardShouldPersistTaps="handled">
          <View style={styles.container}>
            <View style={styles.formContainer}>
              <View style={{ flex: 1, alignItems: "flex-end" }}>
                <View style={[styles.rowContainer]}>
                  <Text style={styles.requireText}>*</Text>
                  <Text style={[styles.labelText]}>Số điện thoại</Text>
                  <TextInput
                    maxLength={15}
                    placeholder="Nhập số điện thoại"
                    placeholderTextColor="#666666"
                    style={[
                      styles.textInput,
                      styles.titleText,
                      { color: "#05375a", marginRight: 15 },
                    ]}
                    autoCapitalize="none"
                    keyboardType="phone-pad"
                    defaultValue={data.numberPhone}
                    onChangeText={(val) => handleChangePhone(val)}
                  />
                </View>
                {numberErr ? (
                  <View style={{ ...styles.rowContainer, marginTop: 2 }}>
                    <></>
                    <Text style={[styles.errorMessage]}>{numberErr}</Text>
                  </View>
                ) : null}

                <View style={[styles.rowContainer]}>
                  <Text style={styles.requireText}>*</Text>

                  <Text style={[styles.labelText]}>Mật khẩu</Text>
                  <TextInput
                    placeholder="Nhập mật khẩu"
                    placeholderTextColor="#666666"
                    style={[
                      styles.textInput,
                      styles.titleText,
                      { color: "#05375a", marginRight: 15 },
                    ]}
                    autoCapitalize="none"
                    secureTextEntry={true}
                    defaultValue={data.password}
                    onChangeText={(val) => handleChangePassword(val)}
                  />
                </View>
                {passwordErr ? (
                  <View style={{ ...styles.rowContainer, marginTop: 2 }}>
                    <></>
                    <Text style={[styles.errorMessage]}>{passwordErr}</Text>
                  </View>
                ) : null}
                <View style={[styles.rowContainer]}>
                  <Text style={styles.requireText}>*</Text>
                  <Text style={[styles.labelText]}>Xác nhận mật khẩu</Text>
                  <TextInput
                    placeholder="Nhập lại mật khẩu"
                    placeholderTextColor="#666666"
                    style={[
                      styles.textInput,
                      styles.titleText,
                      { color: "#05375a", marginRight: 15 },
                    ]}
                    autoCapitalize="none"
                    // keyboardType="phone-pad"
                    secureTextEntry={true}
                    defaultValue={data.confirmPassword}
                    onChangeText={(val) => handleChangeConfirmPassword(val)}
                  />
                </View>
                {confirmPasswordErr ? (
                  <View style={{ ...styles.rowContainer, marginTop: 2 }}>
                    <></>
                    <Text style={[styles.errorMessage]}>
                      {confirmPasswordErr}
                    </Text>
                  </View>
                ) : null}
                <View style={[styles.rowContainer]}>
                  <Text style={styles.requireText}>*</Text>
                  <Text style={[styles.labelText]}>Tên cửa hàng</Text>
                  <TextInput
                    placeholder="Nhập tên cửa hàng"
                    placeholderTextColor="#666666"
                    style={[
                      styles.textInput,
                      styles.titleText,
                      { color: "#05375a", marginRight: 15 },
                    ]}
                    autoCapitalize="none"
                    // keyboardType="phone-pad"
                    defaultValue={data.storeName}
                    onChangeText={(val) => handleChangeStoreName(val)}
                  />
                </View>
                {storeNameErr ? (
                  <View style={{ ...styles.rowContainer, marginTop: 2 }}>
                    <></>
                    <Text style={[styles.errorMessage]}>{storeNameErr}</Text>
                  </View>
                ) : null}
                <View style={[styles.rowContainer, { height: 100 }]}>
                  <Text style={styles.requireText}>*</Text>
                  <Text style={[styles.labelText]}>Ảnh cửa hàng</Text>
                  <View
                    style={{
                      width: "51.5%",
                      marginLeft: 23,
                      flexDirection: "row",
                      justifyContent: "flex-start",
                    }}
                  >
                    {selectedImage !== null ? (
                      <View style={{ marginRight: 15 }}>
                        <Image
                          source={{ uri: selectedImage.localUri }}
                          style={styles.thumbnail}
                        />
                      </View>
                    ) : null}

                    <TouchableOpacity
                      style={[styles.uploadButton]}
                      onPress={openImagePickerAsync}
                    >
                      <AntDesign
                        name="plus"
                        size={92}
                        style={{
                          flexDirection: "column",
                          alignSelf: "center",
                          color: StatisticColor.CANCELLATION,
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                {imageErr ? (
                  <View style={{ ...styles.rowContainer, marginTop: 2 }}>
                    <></>
                    <Text style={[styles.errorMessage]}>{imageErr}</Text>
                  </View>
                ) : null}
                <View style={[styles.rowContainer]}>
                  <View
                    style={{
                      justifyContent: "flex-end",
                      width: "48.5%",
                      flexDirection: "row",
                    }}
                  >
                    <Text style={styles.requireText}>*</Text>
                    <Text
                      style={[
                        styles.labelText,
                        { textAlign: "right", marginRight: 18 },
                      ]}
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
                        color: "#5d5d5d",
                        fontSize: HEADER_FONT_SIZE,
                        borderWidth: 1,
                      },
                      listView: {
                        backgroundColor: "rgba(192,192,192,0.9)",
                      },
                    }}
                  />
                </View>
                {addressErr ? (
                  <View style={{ ...styles.rowContainer, marginTop: 2 }}>
                    <></>
                    <Text style={[styles.errorMessage]}>{addressErr}</Text>
                  </View>
                ) : null}
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableHighlight
                style={{ ...styles.button, marginTop: 15 }}
                underlayColor={PRIMARY_COLOR}
                activeOpacity={0.9}
                onPress={() => {
                  handleRegisterAccount(
                    data.numberPhone,
                    data.password,
                    data.confirmPassword,
                    data.storeName,
                    selectedImage,
                    address
                  );
                }}
              >
                <Text style={[styles.text, styles.textButton, styles.boldText]}>
                  Đăng ký
                </Text>
              </TouchableHighlight>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default RegisterAccountScreen;
