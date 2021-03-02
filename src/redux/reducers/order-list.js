import { 
    GET_ACCEPTANCE_ORDERS_TODAY, 
    GET_ARRIVAL_ORDER_TODAY, 
    GET_ORDER_AFTER_UPDATE, 
    GET_PREPARATION_ORDERS_TODAY, 
    GET_READINESS_ORDERS_TODAY, 
    SEND_QR_CODE, 
    SET_ACCEPTANCE_ORDER, 
    SET_PREPARATION_ORDER, 
    SET_READINESS_ORDER, 
    SET_RECEPTION_ORDER 
} from "../action/order-list";

const initialState = {
    orderLists: [],
    filterToDoList: [],
    filterDoingList: [],
    filterReadyList: [],
    filterArrivalList: []
};

const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ACCEPTANCE_ORDERS_TODAY: {
            
            const data = action.payload.data.data.orders;

            // console.log('setAcceptance ' + data.length)
            return {...state, filterToDoList: data};
        }

        case GET_PREPARATION_ORDERS_TODAY: {
            const data = action.payload.data.data.orders;
            return {...state, filterDoingList: data};
        }

        case GET_READINESS_ORDERS_TODAY: {
            const data = [...action.responseReady.data.data.orders, ...action.responseArrival.data.data.orders];

            return {...state, filterReadyList: data};
        }

        case GET_ARRIVAL_ORDER_TODAY: {
            const data = action.payload.data.data.orders;

            return {...state, filterArrivalList: data};
        }

        case SET_RECEPTION_ORDER: {
            
            const id = action.payload;
            const orderList = state.filterReadyList.filter((order) => {
                return order.id != id;
            })
            
            return {...state, filterReadyList: orderList};
        }

        case SET_PREPARATION_ORDER: {
            const id = action.payload;
            let doingList = state.filterDoingList.map((order)=>order);
            // console.log("filterDoingList: ", doingList);
            const orderList = state.filterToDoList.filter((order) => {
                if(order.id === id){
                    doingList.push(order);
                }
                return order.id != id;
            })

            
            // console.log("filterTodoList: ", orderList);
            
            return {...state, filterToDoList: orderList, filterDoingList: doingList };
        }

        case SET_READINESS_ORDER: {
            const id = action.payload;
            let readyList = state.filterReadyList.map((order)=>order);
            // console.log("filterDoingList: ", doingList);
            const orderList = state.filterDoingList.filter((order) => {
                if(order.id === id){
                    readyList.push(order);
                }
                return order.id != id;
            })

            
            // console.log("filterTodoList: ", orderList);
            
            return {...state, filterDoingList: orderList, filterReadyList: readyList };
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