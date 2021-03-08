import { OrderStatus, SUCCESS } from "../../constance/constance";
import fca from "../../service/fca-api/fca";

//Get
export const GET_ACCEPTANCE_ORDERS_TODAY = "GET_ACCEPTANCE_ORDERS_TODAY";
export const GET_PREPARATION_ORDERS_TODAY = "GET_PREPARATION_ORDERS_TODAY";
export const GET_READINESS_ORDERS_TODAY = "GET_READINESS_ORDERS_TODAY";
export const GET_ORDER_AFTER_UPDATE = "GET_ORDER_AFTER_UPDATE";
export const GET_ARRIVAL_ORDER_TODAY = "GET_ARRIVAL_ORDER_TODAY";

//Set
export const SET_RECEPTION_ORDER = "SET_RECEPTION_ORDER";
export const SET_ACCEPTANCE_ORDER = "SET_ACCEPTANCE_ORDER";
export const SET_PREPARATION_ORDER = "SET_PREPARATION_ORDER";
export const SET_READINESS_ORDER = "SET_READINESS_ORDER";
export const SET_ARRIVAL_ORDER = "SET_ARRIVAL_ORDER";
export const SET_LIST_INIT_ORDER = "SET_LIST_INIT_ORDER";
export const SET_TIME_REMAIN = "SET_TIME_REMAIN";



export const SEND_QR_CODE = "SEND_QR_CODE";

export const getAcceptOrderToday = () => {
    return async dispatch => {
        console.log('call api')
        try {
            const response = await fca.get('/order', {
                params: {
                    status: OrderStatus.ACCEPTANCE
                }
            });

            if (response.data.meta.status !== SUCCESS) {
                throw new Error("Something went wrong");
            }
            
            const orders = response.data.data.orders;

            dispatch({
                type: GET_ACCEPTANCE_ORDERS_TODAY,
                payload: orders,
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
                    status: OrderStatus.PREPARATION
                }
            });

            if (response.data.meta.status !== SUCCESS) {
                throw new Error("Something went wrong");
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
            const responseReady = await fca.get('/order', {
                params: {
                    status:OrderStatus.READINESS     
                }
            });

            const responseArrival = await fca.get('/order', {
                params: {
                    status:OrderStatus.ARRIVAL     
                }
            });

            if (responseReady.data.meta.status !== SUCCESS || responseArrival.data.meta.status !== SUCCESS) {
                throw new Error("Something went wrong");
            }

            dispatch({
                type: GET_READINESS_ORDERS_TODAY,
                responseArrival: responseArrival,
                responseReady: responseReady
            })
        } catch (error) {
            // throw error;
            console.error(error);
        }        
    }
};

export const getArrivalOrderToday = () => {
    return async dispatch => {
        try {
            const response = await fca.get('/order', {
                params: {
                    status:OrderStatus.ARRIVAL     
                }
            });

            if (response.data.meta.status !== SUCCESS) {
                throw new Error("Something went wrong");
            }

            dispatch({
                type: GET_ARRIVAL_ORDER_TODAY,
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
                throw new Error("Something went wrong");
            }
            
            if(status === OrderStatus.RECEPTION) {
                dispatch({
                    type: SET_RECEPTION_ORDER,
                    payload: id
                })
            } else if (status === OrderStatus.ACCEPTANCE) {
                dispatch({
                    type: SET_ACCEPTANCE_ORDER,
                    payload: id
                })
            } else if (status === OrderStatus.PREPARATION) {
                dispatch({
                    type: SET_PREPARATION_ORDER,
                    payload: id
                })
            } else if (status === OrderStatus.READINESS) {
                dispatch({
                    type: SET_READINESS_ORDER,
                    payload: id
                })
            } else if (status === OrderStatus.ARRIVAL) {
                dispatch({
                    type: SET_ARRIVAL_ORDER,
                    payload: id
                })
            }
            
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
        console.log('id' + 'id')

        try {
            const response = await fca.post(`/order/${id}/send-qrcode`, { 
                params: {
                    id: id
                }
            });
            if (response.data.meta.status !== SUCCESS) {
                throw new Error("Something went wrong");
            }
            
            dispatch({
                type: SEND_QR_CODE,
            })
        } catch (error) {
            throw error;
        }        
    }
}
