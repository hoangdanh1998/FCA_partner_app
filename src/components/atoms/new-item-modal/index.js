import React, { useState } from 'react'
import {
    View,
    Text,
    Modal,
    Pressable,
    Alert,
    KeyboardAvoidingView,
    ScrollView,
    TouchableOpacity,
    ActivityIndicator,
    Image,
    TouchableHighlight
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { styles } from './style';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { v4 as uuidv4 } from "uuid";
import * as firebase from "firebase";
import { PRIMARY_COLOR, StatisticColor } from '../../../constance/constance';
import * as ImagePicker from 'expo-image-picker';
import "react-native-get-random-values";
import { registerItem } from '../../../redux/actions/account';
import { useSelector, useDispatch } from 'react-redux';
import AwesomeAlert from 'react-native-awesome-alerts';


export default function NewItemModal(props) {

    const partner = useSelector(state => state.account.partner);
    const dispatch = useDispatch();

    const [selectItem, setSelectItem] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [isLoadingImage, setIsLoadingImage] = useState(false);
    const [price, setPrice] = useState("");
    const [itemName, setItemName] = useState("");
    const [alertMessage, setAlertMessage] = useState();
    const [isShowAlert, setIsShowAlert] = useState(false);
    const [isErr, setIsErr] = useState(false);

    const [imageErr, setImageErr] = useState(null);
    const [priceErr, setPriceErr] = useState(null);
    const [itemNameErr, setItemNameErr] = useState(null);
    const [itemGroupErr, setItemGroupErr] = useState(null);

    const itemGroupArr = [
        {
            value: "7d3714d3-f026-46af-82dc-8649f40d96ef",
            label: "Cà phê sữa"
        },

        {
            value: "91d94e22-14e9-4955-b5b7-66ef9a4a36d6",
            label: "Cà phê"
        },

        {
            value: "ce8487fb-7108-40d0-b71e-36b1703043dc",
            label: "Cam ép",
        },
        {
            value: "3698ea4a-6a22-4691-8ef3-d9b43ffdbc95",
            label: "Bạc xỉu",
        },

        {
            value: "780150fa-185e-41e4-b1ad-c93c39826b29",
            label: "Chanh đá"
        }
    ]

    const showAlert = () => {
        console.log("hien alert len");
        setIsShowAlert(true);
    };

    const hideAlert = () => {
        setIsShowAlert(false);
    };

    let openImagePickerAsync = async () => {
        try {
            setIsLoadingImage(true);
            // console.log("hello");
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
                console.log("imageLink", imageLink);

            }

        } catch (error) {
            console.error("error upload item image,", error);
        }

        // setImageErr(null);
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

    const handleChangeName = (itemName) => {
        setItemNameErr(null);
        setItemName(itemName);
    }

    const handleChangePrice = (price) => {
        setPriceErr(null);
        setPrice(price);
    }

    const checkItemName = (name) => {

        if (name.length === 0) {

            setItemNameErr("Tên sản phẩm là bắt buộc");
            return false;
        } else {

            return true;
        }
    }

    const checkImage = (image) => {
        if (!image) {
            setImageErr("Hình ảnh là bắt buộc");
            return false;
        } else {
            return true;
        }
    }

    const checkPrice = (price) => {
        const priceReg = /^[1-9]\d{3,4}$/;

        if (!price.match(priceReg)) {
            setPriceErr("Giá sản phẩm không hợp lệ");
            return false;
        } else {
            return true;
        }
    }

    const checkSelectGroup = (group) => {
        if (!group) {
            setItemGroupErr("Danh mục là bắt buộc");
            return false;
        } else {
            return true;
        }
    }


    const handleRegisterItem = async (fcaItemId, partnerId, name, price, imageLink) => {


        try {
            setIsErr(false);
            setImageErr(null);
            setItemGroupErr(null);
            setItemNameErr(null);
            setPriceErr(null);
            console.log("tao item roi nè");

            const isFcaItemId = checkSelectGroup(fcaItemId);
            const isPrice = checkPrice(price);
            const isName = checkItemName(name);
            const isImageLink = checkImage(imageLink);

            console.log("isFcaItemId", fcaItemId);
            console.log("isPrice", isPrice);
            console.log("isName", isName);
            console.log("isImageLink", imageLink);

            if (isFcaItemId && isPrice && isName && isImageLink) {
                console.log("tao item");
                await dispatch(registerItem(fcaItemId, partnerId, name,
                    price, imageLink));
                setAlertMessage("Gửi yêu cầu thành công")
                setIsErr(false);
                showAlert();
            }

        } catch (error) {
            setAlertMessage("Gửi yêu cầu thất bại")
            setIsErr(true);
            showAlert();
            console.error("error register item", error);
        }
    }

    return (

        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior="height"
            enabled
        >
            <AwesomeAlert
                show={isShowAlert}
                showProgress={false}
                title="Thông báo"
                message={alertMessage}
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showConfirmButton={true}
                titleStyle={[styles.titleAlert, styles.boldText]}
                messageStyle={[styles.title_font_size]}
                confirmText="OK"
                confirmButtonColor="#DD6B55"
                onDismiss={() => {
                    if (isErr) {
                        hideAlert()
                    } else {
                        hideAlert();
                        props.navigation.navigate("ITEM_CATALOG");

                    }

                }}
                onConfirmPressed={() => {
                    if (isErr) {
                        hideAlert()
                    } else {
                        hideAlert();
                        props.navigation.navigate("ITEM_CATALOG");

                    }
                }}
                confirmButtonTextStyle={[styles.title_font_size, styles.boldText]}
            />
            <ScrollView
                keyboardShouldPersistTaps="handled"
                style={{ flex: 1, backgroundColor: "white" }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <ScrollView style={{ width: "100%", height: "100%" }}>
                            <View style={styles.headerContainer}>
                                <Text style={[styles.header]}>
                                    ĐĂNG KÍ MÓN
                            </Text>
                            </View>
                            <View style={styles.formContainer}>
                                <View style={styles.rowContainer}>
                                    <Text style={styles.requireText}>*</Text>
                                    <Text
                                        style={[styles.title, styles.labelTextInput]}
                                    >
                                        Tên món
                            </Text>
                                    <TextInput
                                        placeholder="Nhập tên món"
                                        placeholderTextColor="#666666"
                                        style={[
                                            styles.textInput,
                                            styles.title,
                                            { color: "#000", marginRight: 15 }]}
                                        autoCapitalize="none"

                                        // defaultValue={}
                                        onChangeText={(val) => handleChangeName(val)}
                                    />
                                </View>
                                {itemNameErr
                                    ? (<View style={{ ...styles.rowContainer, marginTop: 2 }}>
                                        <View style={{ width: "27%" }}></View>
                                        <Text style={[styles.errorMessage]}>
                                            {itemNameErr}
                                        </Text>
                                    </View>)
                                    : null
                                }
                                <View style={styles.rowContainer}>
                                    <Text style={styles.requireText}>*</Text>
                                    <Text style={[styles.title, styles.labelTextInput]}>
                                        Giá bán
                                </Text>
                                    <TextInput
                                        placeholder="Nhập giá bán"
                                        placeholderTextColor="#666666"
                                        style={[
                                            styles.textInput,
                                            styles.title,
                                            { color: "#000", marginRight: 15, width: "23%" }]}
                                        autoCapitalize="none"
                                        onChangeText={(val) => handleChangePrice(val)}
                                    />
                                </View>
                                {priceErr
                                    ? (<View style={{ ...styles.rowContainer, marginTop: 2 }}>
                                        <View style={{ width: "27%" }}></View>
                                        <Text style={[styles.errorMessage]}>
                                            {priceErr}
                                        </Text>
                                    </View>)
                                    : null
                                }
                                <View style={styles.rowContainer}>
                                    <Text style={styles.requireText}>*</Text>
                                    <Text style={[styles.title, styles.labelTextInput]}>
                                        Danh mục
                                </Text>
                                    <DropDownPicker
                                        placeholder="Chọn một danh mục"
                                        items={itemGroupArr}
                                        // defaultValue={}
                                        containerStyle={{ height: 40, width: "40%" }}
                                        style={{ backgroundColor: '#fafafa' }}
                                        itemStyle={{
                                            justifyContent: 'flex-start'
                                        }}
                                        dropDownStyle={{ backgroundColor: '#fafafa' }}
                                        onChangeItem={item => {
                                            setItemGroupErr(null);
                                            setSelectItem(item.value)
                                        }}
                                        placeholderStyle={styles.title}
                                        labelStyle={styles.title}
                                    />
                                </View>
                                {itemGroupErr
                                    ? (<View style={{ ...styles.rowContainer, marginTop: 2 }}>
                                        <View style={{ width: "27%" }}></View>
                                        <Text style={[styles.errorMessage]}>
                                            {itemGroupErr}
                                        </Text>
                                    </View>)
                                    : null
                                }
                                <View style={[styles.rowContainer, { height: 100 }]}>
                                    <Text style={styles.requireText}>*</Text>
                                    <Text style={[styles.title, styles.labelTextInput]}>
                                        Ảnh sản phẩm
                                    </Text>
                                    <View style={{
                                        width: "51.5%", marginLeft: 23,
                                        flexDirection: "row",
                                        justifyContent: "flex-start",
                                    }}>
                                        {/* {console.log("isloading", isLoadingImage)} */}
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
                                        <View style={{ width: "27%" }}></View>
                                        <Text style={[styles.errorMessage]}>
                                            {imageErr}
                                        </Text>
                                    </View>)
                                    : null
                                }
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableHighlight
                                    style={{ ...styles.button, marginTop: 15 }}
                                    underlayColor={PRIMARY_COLOR}
                                    activeOpacity={0.9}
                                    onPress={
                                        () => handleRegisterItem(selectItem, partner?.id, itemName, price, selectedImage?.localUri)
                                    }
                                >
                                    <Text style={[styles.title, styles.textButton, styles.boldText]}>
                                        Đăng ký
                                    </Text>
                                </TouchableHighlight>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}
