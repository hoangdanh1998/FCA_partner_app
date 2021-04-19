import React, { useState, useEffect } from 'react'
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
import { itemStatus, OrderStatus, PRIMARY_COLOR, StatisticColor } from '../../../constance/constance';
import * as ImagePicker from 'expo-image-picker';
import "react-native-get-random-values";
import { getFCAItem, registerItem } from '../../../redux/actions/account';
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
    const [listFcaItem, setListFcaItem] = useState([]);
    const [isErr, setIsErr] = useState(false);

    const [imageErr, setImageErr] = useState(null);
    const [priceErr, setPriceErr] = useState(null);
    const [itemNameErr, setItemNameErr] = useState(null);
    const [itemGroupErr, setItemGroupErr] = useState(null);

    const fcaItems = useSelector(state => state.account.fcaItems)

    const handleGetFCAItem = async () => {
        try {
            if (partner) {
                const listPartnerItem = [...partner?.items];
                // console.log("list partner item", listPartnerItem);
                const activeAndWaitList = listPartnerItem.filter((item) => {
                    return item?.status == itemStatus.ACTIVE || item?.status == itemStatus.PROCESS;
                })
                const activeAndWaitIDList = activeAndWaitList.map((item) => {return item?.fcaItem?.id});
                console.log("activeAndWaitList: ", activeAndWaitIDList);
                const filterList = fcaItems.filter((item) => !activeAndWaitIDList.includes(item?.id));
                console.log("filter list", filterList);
                const fcaItemList = filterList.map((item) => {
                    return { label: item.name, value: item.id }
                })
                setListFcaItem(fcaItemList);
                // console.log("fcaItemList: ", fcaItemList);
            }

        } catch (error) {
            console.error("err get fcaItemList: ", error);
        }

    }

    useEffect(() => {
        // dispatch(getFCAItem(partner?.id));
        handleGetFCAItem();
    }, [dispatch])

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
        console.log("name:", name);
        try {
            setIsErr(false);
            setImageErr(null);
            setItemGroupErr(null);
            setItemNameErr(null);
            setPriceErr(null);
            console.log("tao item roi nè");

            const isFcaItemId = checkSelectGroup(fcaItemId);
            const isPrice = checkPrice(price);
            // const isName = checkItemName(name);
            const isImageLink = checkImage(imageLink);

            if (isFcaItemId && isPrice && isImageLink) {
                console.log("tao item");
                await dispatch(registerItem(fcaItemId, partnerId, name,
                    price, imageLink));
                // setAlertMessage("Gửi yêu cầu thành công")
                // setIsErr(false);
                // showAlert();
                props.navigation.navigate("ITEM_CATALOG"); 22
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
                                {/* <View style={styles.rowContainer}>
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
                                } */}
                                <View style={styles.rowContainer}>
                                    <Text style={styles.requireText}>*</Text>
                                    <Text style={[styles.title, styles.labelTextInput]}>
                                        Tên món
                                </Text>
                                    <DropDownPicker
                                        placeholder="Chọn tên món"
                                        items={listFcaItem}
                                        // defaultValue={}
                                        containerStyle={{ height: 40, width: "45%" }}
                                        style={{ backgroundColor: '#fafafa' }}
                                        itemStyle={{
                                            justifyContent: 'flex-start'
                                        }}
                                        dropDownStyle={{ backgroundColor: '#fafafa' }}
                                        onChangeItem={item => {
                                            setItemGroupErr(null);
                                            setSelectItem(item.value);
                                            setItemName(item.label);
                                        }}
                                        placeholderStyle={styles.title}
                                        labelStyle={styles.title}
                                    />
                                </View>
                                {itemGroupErr
                                    ? (<View style={{ ...styles.rowContainer, marginTop: 2 }}>
                                        <View style={{ width: "35%" }}></View>
                                        <Text style={[styles.errorMessage]}>
                                            {itemGroupErr}
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
                                            { color: "#000", marginRight: 15, width: "30%" }]}
                                        autoCapitalize="none"
                                        onChangeText={(val) => handleChangePrice(val)}
                                    />
                                </View>
                                {priceErr
                                    ? (<View style={{ ...styles.rowContainer, marginTop: 2 }}>
                                        <View style={{ width: "35%" }}></View>
                                        <Text style={[styles.errorMessage]}>
                                            {priceErr}
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
                                        <View style={{ width: "35%" }}></View>
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
