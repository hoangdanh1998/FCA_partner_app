import { Body, Button, Text } from 'native-base';
import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { BACKGROUND_COLOR, HEADER_FONT_SIZE } from '../../../constance/constance';

const SearchBar = (props) => {
    const { handelSearchReadyList } = props;
    return (
        <View style={styles.view_background}>
            <View style={styles.background}>
            <Icon name="search1"  style = {styles.iconStyle}/>
            <TextInput 
                    style={styles.inputStyle} 
                    onChangeText={phone => {
                    handelSearchReadyList(phone)}
                }     
                placeholder="Nhập số điện thoại khách hàng"
                autoCorrect= {false}
                autoCapitalize= 'none'
                // onEndEditing = {props.onTermSubmit}
            />
        </View>
        <Body >
            <Button 
                rounded
                style = {styles.button_style}>
                <Text>
                    Tìm kiếm
                </Text>
            </Button>
        </Body>
        </View>
        
    );
};

const styles = StyleSheet.create({
    view_background: {
        flexDirection:"row",
        alignItems:"center",
        marginVertical: 10,
    },
    background: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: "row", 
        width: "40%",
        borderStyle:"solid",
        borderWidth: 1,
        padding: 10
    },
    inputStyle: {
        fontSize: HEADER_FONT_SIZE,
        flex: 1,
        
    }, 
    iconStyle: {
        fontSize: 30,
        alignSelf: "center", 
        marginRight: 5
    },
    button_style: {
        backgroundColor: BACKGROUND_COLOR
    }
});


export default SearchBar;