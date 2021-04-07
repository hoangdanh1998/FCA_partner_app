
export const LOGIN = "LOGIN";
export const RESTORE_TOKEN = "RESTORE_TOKEN";
export const SIGN_OUT = "SIGN_OUT";
export const FINISH_LOADING = "FINISH_LOADING";
export const CHANGE_ERROR = "CHANGE_ERROR";
export const REGISTER_ACCOUNT = "REGISTER_ACCOUNT";
export const OPEN_STORE = "OPEN_STORE";


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