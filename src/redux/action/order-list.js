import { OrderStatus, SUCCESS } from "../../constance/constance";
import fca from "../../service/fca-api/fca";


export const GET_ACCEPTANCE_ORDERS_TODAY = "GET_ACCEPTANCE_ORDERS_TODAY";
export const GET_PREPARATION_ORDERS_TODAY = "GET_PREPARATION_ORDERS_TODAY";
export const GET_READINESS_ORDERS_TODAY = "GET_READINESS_ORDERS_TODAY";
export const SET_RECEPTION_ORDER = "SET_RECEPTION_ORDER";
export const GET_ORDER_AFTER_UPDATE = "GET_ORDER_AFTER_UPDATE";
export const SEND_QR_CODE = "SEND_QR_CODE";

export const getAcceptOrderToday = () => {
    return async dispatch => {
        try {
            const response = await fca.get('/order', {
                params: {
                    createdDate:"2021-02-06",
                    // status: "ACCEPTANCE"
                }
            });

            if (response.data.meta.status !== SUCCESS) {
                throw new Error("Somthing went wrong");
            }
            
            dispatch({
                type: GET_ACCEPTANCE_ORDERS_TODAY,
                payload: response
            })
        } catch (error) {
            throw error;
        }
        
    }
};

export const getPreparationOrderToday = () => {
    return async dispatch => {
        try {
            const response = await fca.get('/order', {
                params: {
                    createdDate:"2021-02-06"
                    
                }
            });

            if (response.data.meta.status !== SUCCESS) {
                throw new Error("Somthing went wrong");
            }

            dispatch({
                type: GET_PREPARATION_ORDERS_TODAY,
                payload: response
            })
        } catch (error) {
            throw error;
        }
        
    }
};

export const getReadinessOrderToday = () => {
    return async dispatch => {
        try {
            const response = await fca.get('/order', {
                params: {
                    createdDate:"2021-02-06",
                    status:OrderStatus.READINESS     
                }
            });

            if (response.data.meta.status !== SUCCESS) {
                throw new Error("Somthing went wrong");
            }

            dispatch({
                type: GET_READINESS_ORDERS_TODAY,
                payload: response
            })
        } catch (error) {
            throw error;
        }        
    }
};

export const setOrderStatus = (id, status) => {
    return async dispatch => {
        
        try {
            const response = await fca.put(`/order/${id}/status`, { status });
            if (response.data.meta.status !== SUCCESS) {
                throw new Error("Somthing went wrong");
            }
            
            dispatch({
                type: SET_RECEPTION_ORDER,
                payload: id
            })
        } catch (error) {
            
            throw error;
        }        
    }
};

export const getOrderAfterUpdate = (status) => {
    return {
        type: GET_ORDER_AFTER_UPDATE,
        payload: status
    };
};

export const sendQRCode = (id) => {
    return async dispatch => {
        
        try {
            const response = await fca.post(`/order/${id}/send-qrcode`, { 
                params: {
                    id: id
                }
            });
            if (response.data.meta.status !== SUCCESS) {
                throw new Error("Somthing went wrong");
            }
            
            dispatch({
                type: SEND_QR_CODE,
            })
        } catch (error) {
            throw error;
        }        
    }
}