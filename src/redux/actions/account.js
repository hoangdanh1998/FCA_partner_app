
export const LOGIN = "LOGIN";
export const RESTORE_TOKEN = "RESTORE_TOKEN";
export const SIGN_OUT = "SIGN_OUT";
export const FINISH_LOADING = "FINISH_LOADING";
export const CHANGE_ERROR = "CHANGE_ERROR";
export const REGISTER_ACCOUNT = "REGISTER_ACCOUNT";


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
                    imageLink:"",
                    address
                }
            )
            console.log("response registerAccount", response);
        } catch (error) {
            console.error(error);
        }
    }
}