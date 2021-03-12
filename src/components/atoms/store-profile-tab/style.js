import React from 'react';
import { StyleSheet } from 'react-native';
import { BACKGROUND_COLOR, HEADER_FONT_SIZE, LIGHT_COLOR } from '../../../constance/constance';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#fff",
        justifyContent: "center"
        
    },

    centered: {
        width: 1000,
        height: "80%",
        margin: 15,
        padding: 10,
        borderColor: "black",
        borderWidth: 1,
        
    },

    profileView: {
        flexDirection: "row"
    },

    formProfile: {
        justifyContent: "space-evenly",
        marginTop: 20
    },

    header: {
        backgroundColor: LIGHT_COLOR,
        width: 250,
        borderRadius: 30,
        padding: 5
    },
    titleHeader: {
        fontSize: HEADER_FONT_SIZE,
        color: BACKGROUND_COLOR,
        fontWeight: "bold",
        textAlign: "center"
    },

    titleProfile: {
        fontSize: HEADER_FONT_SIZE,
        color: "black"
    }

})