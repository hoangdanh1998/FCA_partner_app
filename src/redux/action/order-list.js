import { SUCCESS } from "../../constance/constance";
import fca from "../../service/fca-api/fca";


export const GET_ACCEPTANCE_ORDERS_TODAY = "GET_ACCEPTANCE_ORDERS_TODAY";
export const GET_PREPARATION_ORDERS_TODAY = "GET_PREPARATION_ORDERS_TODAY";
export const GET_READINESS_ORDERS_TODAY = "GET_READINESS_ORDERS_TODAY";


export const getAcceptOrderToday = () => {
    return async dispatch => {
        console.log(123);
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
                    createdDate:"2021-02-06"      
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