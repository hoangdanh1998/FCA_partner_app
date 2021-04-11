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
    ActivityIndicator
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { styles } from './style';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { v4 as uuidv4 } from "uuid";
import * as firebase from "firebase";
import { StatisticColor } from '../../../constance/constance';
import * as ImagePicker from 'expo-image-picker';
import "react-native-get-random-values";


export default function NewItemModal(props) {

    const [selectItem, setSelectItem] = useState();
    const [selectedImage, setSelectedImage] = useState(null);
    const [isLoadingImage, setIsLoadingImage] = useState(false);


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

        }

        } catch (error) {
            console.error("error upload item image,", error);
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

    return (

        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior="height"
            enabled
        >
            <ScrollView
                keyboardShouldPersistTaps="handled"
                style={{ flex: 1, backgroundColor: "white" }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
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
                                // onChangeText={}
                                />
                            </View>
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
                                        { color: "#000", marginRight: 15, width: "40%" }]}
                                    autoCapitalize="none"
                                />
                            </View>
                            <View style={styles.rowContainer}>
                                <Text style={styles.requireText}>*</Text>
                                <Text style={[styles.title, styles.labelTextInput]}>
                                    Danh mục
                                </Text>
                                <DropDownPicker
                                    placeholder="Chọn một danh mục"
                                    items={[
                                        { label: 'Cà phê', value: 'Cà phê' },
                                        { label: 'Cam ép', value: 'Cam ép' },
                                    ]}
                                    // defaultValue={}
                                    containerStyle={{ height: 40, width: "40%" }}
                                    style={{ backgroundColor: '#fafafa' }}
                                    itemStyle={{
                                        justifyContent: 'flex-start'
                                    }}
                                    dropDownStyle={{ backgroundColor: '#fafafa' }}
                                    onChangeItem={item => setSelectItem(item.value)}
                                    placeholderStyle={styles.title}
                                    labelStyle={styles.title}
                                />
                            </View>
                            <View style={[styles.rowContainer, { height: 100 }]}>
                                <Text style={styles.requireText}>*</Text>
                                <Text style={[styles.title, styles.labelTextInput]}>
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
                        </View>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}
