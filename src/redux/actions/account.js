
export const LOGIN = "LOGIN";
export const RESTORE_TOKEN = "RESTORE_TOKEN";
export const SIGN_OUT = "SIGN_OUT";
export const FINISH_LOADING = "FINISH_LOADING";
export const CHANGE_ERROR = "CHANGE_ERROR";
export const REGISTER_ACCOUNT = "REGISTER_ACCOUNT";
export const OPEN_STORE = "OPEN_STORE";
export const REGISTER_ITEM = "REGISTER_ITEM";
export const SET_DEVICE_KEY = "SET_DEVICE_KEY";
export const GET_PARTNER = "GET_PARTNER";


import fca from "../../service/fca-api/fca";


export const login = (phone, password) => {
    return async dispatch => {
        try {
            const response = await fca.post('/auth/login', { phone: phone, password: password });
            dispatch({
                type: LOGIN,
                payload: response
            })
        } catch (error) {
            throw new Error(error);
        }
    };
};

export const finishLoading = () => {
    return {
        type: FINISH_LOADING
    }
}

export const signOut = () => {
    return {
        type: SIGN_OUT,
    }
}

export const changeError = (errMessage) => {
    return {
        type: CHANGE_ERROR,
        payload: errMessage
    }
}

export const restoreToken = (token, partner) => {
    return {
        type: RESTORE_TOKEN,
        payload: {
            token,
            partner
        }
    }
};

export const registerAccount = (account, name, imageLink, address) => {

    return async dispatch => {
        try {
            const response = await fca.post('/partner',
                {
                    account: {
                        phone: account.numberPhone,
                        password: account.password
                    },
                    name,
                    imageLink: imageLink.localUri,
                    address: {
                        latitude: address.latitude,
                        longitude: address.longitude,
                        description:address.description,
                    }
                }
            )
            console.log("response registerAccount", response);
        } catch (error) {
            console.error("loi khi tao partner", error);``
        }
    }
}

export const openStore = (id, isOpen) => {
    return async dispatch => {
        try {
            const response = await fca.put(`/partner/${id}/opening`,
                {
                    isOpen
                }
            );
            
            // console.log("response open store", response.data.data.partner);
            dispatch({
                type:OPEN_STORE,
                payload: response.data.data.partner
            })
        } catch (error) {
            console.error("err open store", error);
        }
    }
}

export const registerItem = (fcaItemId,partnerId, name, price, imageLink) => {
    return async dispatch => {
        try {
            const response = await fca.post(`/partner/${partnerId}/partner-item`,
                {
                    fcaItemId,
                    partnerId,
                    name,
                    price,
                    imageLink
                }
            )
            console.log("response register item ", response);
            dispatch({
                type:REGISTER_ITEM,
                payload: response.data.data.partner
            })
        } catch (error) {
            console.error("loi khi tao partner", error);``
        }
    }
}

export const setDeviceKey = (deviceKey) => {
    return {
        type: SET_DEVICE_KEY,
        payload: deviceKey,
    };
};

export const getPartner = (id) => {
    return async dispatch => {
        try {
            const response = await fca.get(`/partner/${id}`);
            
            console.log("response get store", response.data.data.partner);
            dispatch({
                type:OPEN_STORE,
                payload: response.data.data.partner
            })
        } catch (error) {
            console.error("err open store", error);
        }
    }
}