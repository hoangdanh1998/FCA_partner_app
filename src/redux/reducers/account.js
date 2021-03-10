const { LOGIN, RESTORE_TOKEN, SIGN_OUT, FINISH_LOADING } = require("../actions/account");
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
    partner: {},
    token: null,
    isLoading: true,
    isSignOut: false
};

const removeToken = async () => {
    try {
        await AsyncStorage.removeItem('@storage_Token');

        await AsyncStorage.removeItem('@storage_Partner');


    } catch (e) {
        console.error("remove token error: ", e);
    }

    console.log('Done.')
}

const storeToken = async (token, partner) => {
    try {
        const jsonToken = JSON.stringify(token);
        const jsonPartner = JSON.stringify(partner);
        await AsyncStorage.setItem('@storage_Token', jsonToken);
        await AsyncStorage.setItem('@storage_Partner', jsonPartner);
        
    } catch (e) {
        console.error("error of store token", e);
    }
};

const accountReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            const data = action.payload.data;
            storeToken(data.token, data.partner);
            return { ...state, partner: data.partner, token: data.token, isSignOut: false };
        case RESTORE_TOKEN:
            return { ...state, token: action.payload.token, partner: action.payload.partner, isLoading: false };
        case SIGN_OUT:
            return { ...state, isSignOut: true, partner: null, token: null };
        case FINISH_LOADING:
            console.log("change isloading");
            return { ...state, isLoading: false };
        default:
            return state;
    }
}

export default accountReducer;