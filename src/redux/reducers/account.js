const { LOGIN,
    RESTORE_TOKEN,
    SIGN_OUT,
    FINISH_LOADING,
    CHANGE_ERROR,
    OPEN_STORE,
    REGISTER_ITEM,
    SET_DEVICE_KEY,
    GET_PARTNER,
    GET_FCA_ITEM,
    BLOCK_CUSTOMER
} = require("../actions/account");
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
    partner: {},
    token: null,
    isLoading: true,
    isSignOut: false,
    errMessage: null,
    fcaItems: null,
    bannedCustomers:[]
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

const refreshStore = async (partner) => {
    try {
        await AsyncStorage.removeItem('@storage_Partner');
        const jsonPartner = JSON.stringify(partner);
        await AsyncStorage.setItem('@storage_Partner', jsonPartner);
    } catch (error) {
        console.error("err refreshStore:", error);
    }

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
    // console.log("action type:", action.type);
    switch (action.type) {
        case LOGIN:
            const data = action.payload.data;
            storeToken(data.token, data.partner);
            return { ...state, partner: data.partner, token: data.token, isSignOut: false };
        case RESTORE_TOKEN:
            return { ...state, token: action.payload.token, partner: action.payload.partner, isLoading: false };
        case SIGN_OUT:
            removeToken();
            return { state: null, isSignOut: true, partner: null, token: null, errMessage: null };
        case FINISH_LOADING:
            return { ...state, isLoading: false };
        case CHANGE_ERROR:
            return { ...state, errMessage: action.payload }
        case OPEN_STORE: {

            refreshStore(action.payload);
            return { ...state, partner: action.payload };
        } case REGISTER_ITEM: {
            refreshStore(action.payload);
            return { ...state, partner: action.payload };
        } case SET_DEVICE_KEY: {
            return { ...state, deviceKey: action.payload };
        } case GET_PARTNER: {
            return { ...state, partner: action.payload, bannedCustomers: action.payload.bannedCustomers };
        } case GET_FCA_ITEM: {
            return { ...state, fcaItems: action.payload };
        } case BLOCK_CUSTOMER: {
            console.log("action.payload.bannedCustomers ", action.payload.bannedCustomers);
            return { ...state, partner: action.payload,  bannedCustomers: action.payload.bannedCustomers};
        }
        default:
            return state;
    }
}

export default accountReducer;