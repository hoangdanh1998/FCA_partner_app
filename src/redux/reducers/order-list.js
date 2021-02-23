import { 
    GET_ACCEPTANCE_ORDERS_TODAY, 
    GET_ORDER_AFTER_UPDATE, 
    GET_PREPARATION_ORDERS_TODAY, 
    GET_READINESS_ORDERS_TODAY, 
    SEND_QR_CODE, 
    SET_ACCEPTANCE_ORDER, 
    SET_RECEPTION_ORDER 
} from "../action/order-list";

const initialState = {
    orderLists: [],
    filterToDoList: [],
    filterDoingList: [],
    filterReadyList: []
};

const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ACCEPTANCE_ORDERS_TODAY: {
            
            const data = action.payload.data.data.orders;

            console.log('setAcceptance ' + data.length)
            return {...state, filterToDoList: data};
        }

        case GET_PREPARATION_ORDERS_TODAY: {
            const data = action.payload.data.data.orders;
            return {...state, filterDoingList: data};
        }

        case GET_READINESS_ORDERS_TODAY: {
            const data = action.payload.data.data.orders;

            return {...state, filterReadyList: data};
        }

        case SET_RECEPTION_ORDER: {
            
            const id = action.payload;
            const orderList = state.filterReadyList.filter((order) => {
                return order.id != id;
            })
            
            return {...state, filterReadyList: orderList};
        }

        case SET_ACCEPTANCE_ORDER: {
            return state;
        }

        case SEND_QR_CODE: {
            return state;
        }

        case GET_ORDER_AFTER_UPDATE: {
            
            return state;
        }

        default:
            return state;
    }
    
}

export default ordersReducer;