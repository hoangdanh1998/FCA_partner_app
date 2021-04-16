import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native'
import { BACKGROUND_COLOR } from '../../constance/constance';

import {styles} from './style'

const LoadingPage = () => {
    return (
        <View style = {styles.centered}>
            <ActivityIndicator size="large" color={BACKGROUND_COLOR} />
        </View>
    );
}


export default LoadingPage;