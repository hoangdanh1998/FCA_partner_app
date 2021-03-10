
export const LOGIN = "LOGIN";
export const RESTORE_TOKEN = "RESTORE_TOKEN";
export const SIGN_OUT = "SIGN_OUT";
export const FINISH_LOADING = "FINISH_LOADING";
export const CHANGE_ERROR = "CHANGE_ERROR";


import fca from "../../service/fca-api/fca";


export const login = (phone, password) => {
    return async dispatch => {
        try {
            const response = await fca.post('/auth/login', {phone: phone, password: password});
            // console.log("account partner", response);
            dispatch({
                type:LOGIN,
                payload: response
            })
        } catch (error) {
            throw new Error(error);
            // console.error(error);
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

export const changeError = (isError) => {
    return {
        type: CHANGE_ERROR,
        payload: !isError
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
}