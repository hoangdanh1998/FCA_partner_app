import React, { useState } from 'react'
import {
    View,
    Text,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    ScrollView,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native';
import { styles } from './style'
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { HEADER_FONT_SIZE, KEY_GOOGLE_MAP, StatisticColor } from '../../constance/constance';
import * as ImagePicker from 'expo-image-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';


const RegisterAccountScreen = () => {

    const [address, setAddress] = useState();
    const [selectedImage, setSelectedImage] = useState(null)

    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

        if (permissionResult.granted === false) {
            alert('Permission to access camera roll is required!');
            return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        if (pickerResult.cancelled === true) {
            return;
        }

        setSelectedImage({ localUri: pickerResult.uri });
    };

    // if (selectedImage !== null) {
    //     return (
    //         <View style={styles.container}>
    //             <Image source={{ uri: selectedImage.localUri }} style={styles.thumbnail} />
    //         </View>
    //     );
    // }

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
                            <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                <View style={[styles.rowContainer]}>
                                    <Text style={styles.requireText}>*</Text>
                                    <Text style={[styles.labelText]}>
                                        Số điện thoại
                                </Text>
                                    <TextInput
                                        maxLength={11}
                                        placeholder="Nhập số điện thoại"
                                        placeholderTextColor="#666666"
                                        style={[
                                            styles.textInput,
                                            styles.titleText,
                                            { color: '#05375a', marginRight: 15 }]}
                                        autoCapitalize="none"
                                        keyboardType="phone-pad"
                                    // defaultValue={data.numberPhone}
                                    // onChangeText={(val) => handleChangePhone(val)}
                                    />
                                </View>
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
                                            { color: '#05375a', marginRight: 15 }]}
                                        autoCapitalize="none"
                                        secureTextEntry = {true}
                                        // keyboardType="phone-pad"
                                    // defaultValue={data.numberPhone}
                                    // onChangeText={(val) => handleChangePhone(val)}
                                    />
                                </View>
                                <View style={[styles.rowContainer]}>
                                    <Text style={styles.requireText}>*</Text>
                                    <Text style={[styles.labelText]}>
                                        Xác nhận mật khẩu
                                </Text>
                                    <TextInput
                                        placeholder="Nhập lại mật khẩu"
                                        placeholderTextColor="#666666"
                                        style={[
                                            styles.textInput,
                                            styles.titleText,
                                            { color: '#05375a', marginRight: 15 }]}
                                        autoCapitalize="none"
                                        // keyboardType="phone-pad"
                                        secureTextEntry = {true}
                                    // defaultValue={data.numberPhone}
                                    // onChangeText={(val) => handleChangePhone(val)}
                                    />
                                </View>
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
                                            { color: '#05375a', marginRight: 15 }]}
                                        autoCapitalize="none"
                                        // keyboardType="phone-pad"
                                    // defaultValue={data.numberPhone}
                                    // onChangeText={(val) => handleChangePhone(val)}
                                    />
                                </View>
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
                                            ? (<View style = {{marginRight: 15}}>
                                                <Image source={{ uri: selectedImage.localUri }} style={styles.thumbnail} />
                                            </View>) : null
                                        }

                                        <TouchableOpacity
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
                                    </View>

                                </View>
                                <View style={[styles.rowContainer,]}>
                                    <View style={{
                                        justifyContent: "flex-end",
                                        width: "48.5%",
                                        flexDirection: "row",
                                    }}>
                                        <Text style={styles.requireText}>*</Text>
                                        <Text style={[
                                            styles.labelText,
                                            { textAlign: 'right', marginRight: 18, }]}>
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
                                                marginRight: 11
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
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>

        </KeyboardAvoidingView >

    )
};

export default RegisterAccountScreen;