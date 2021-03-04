import React from 'react'
import { View, Text, Image } from 'react-native';
import { styles } from './style';
import Feather from 'react-native-vector-icons/Feather'


const Login = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require("../../assets/logo.png")}
                style = {
                    styles.logo
                }
            />
            <View style = {style.form}>
                <Feather
                    name="user-o"
                    color={colors.text}
                    size={20}
                />
            </View>
        </View>
    );
};

export default Login;