import { GET_ACCEPTANCE_ORDERS_TODAY, GET_PREPARATION_ORDERS_TODAY, GET_READINESS_ORDERS_TODAY } from "../action/order-list";

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

        default:
            return state;
    }
    
}

export default ordersReducer;