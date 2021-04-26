import { OrderStatus } from "../../constance/constance";
import {
    GET_ACCEPTANCE_ORDERS_TODAY,
    GET_ARRIVAL_ORDER_TODAY,
    GET_FINISH_ORDER_BY_DAY,
    GET_ORDER_AFTER_UPDATE,
    GET_PREPARATION_ORDERS_TODAY,
    GET_READINESS_ORDERS_TODAY,

    GET_TROUBLE_ORDER_BY_DAY,

    SEND_QR_CODE,

    SET_ACCEPTANCE_ORDER,
    SET_ARRIVAL_ORDER,
    SET_LIST_INIT_ORDER, SET_PREPARATION_ORDER,
    SET_READINESS_ORDER,
    SET_RECEPTION_ORDER,

    UPDATE_LIST_AFTER_CHANGE_STATUS
} from "../actions/order-list";

const initialState = {
    orderLists: [],
    listInitOrder: [],
    filterToDoList: [],
    filterDoingList: [],
    filterReadyList: [],
    filterArrivalList: [],
    filterFinishOrderList: [],
    filterTroubleOrderList: [],
};

const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ACCEPTANCE_ORDERS_TODAY: {

            const data = action.payload.data.data.orders;
            return { ...state, filterToDoList: data };
        }

        case GET_PREPARATION_ORDERS_TODAY: {
            const data = action.payload.orders;
            return { ...state, filterDoingList: data };
        }

        case GET_READINESS_ORDERS_TODAY: {
            const data = [...action.responseArrival.data.data.orders, ...action.responseReady.data.data.orders];

            return { ...state, filterReadyList: data };
        }

        case GET_ARRIVAL_ORDER_TODAY: {
            const data = action.payload.data.data.orders;

            return { ...state, filterArrivalList: data };
        }

        case SET_RECEPTION_ORDER: {

            const id = action.payload;

            const doingList = state.filterDoingList.filter((order) => {
                return order.id != id;
            })

            const orderList = state.filterReadyList.filter((order) => {
                return order.id != id;
            })

            return { ...state, filterReadyList: orderList, filterDoingList: doingList };
        }

        case SET_PREPARATION_ORDER: {
            const id = action.payload;
            let doingList = state.filterDoingList.map((order) => order);
            const orderList = state.filterToDoList.filter((order) => {
                if (order.id === id) {
                    doingList.push(order);
                }
                return order.id != id;
            })



            return { ...state, filterToDoList: orderList, filterDoingList: doingList };
        }

        case SET_READINESS_ORDER: {
            const id = action.payload;
            let readyList = state.filterReadyList.map((order) => order);
            const orderList = state.filterDoingList.filter((order) => {
                if (order.id === id) {
                    readyList.push(order);
                }
                return order.id != id;
            })



            return { ...state, filterDoingList: orderList, filterReadyList: readyList };
        }

        case SET_ARRIVAL_ORDER: {
            return state;
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

        case SET_LIST_INIT_ORDER: {

            return { ...state, listInitOrder: action.payload.listInit };
        }

        case GET_FINISH_ORDER_BY_DAY: {
            return { ...state, filterFinishOrderList: action.payload.orders}
        }

        case GET_TROUBLE_ORDER_BY_DAY: {
            return { ...state, filterTroubleOrderList: action.payload.orders};
        }

        case UPDATE_LIST_AFTER_CHANGE_STATUS: {
            const id = action.payload.id;
            const currentStatus = action.payload.currentStatus;
            const toDoList = state.filterToDoList.filter((order) => {
                return order.id != id;
            });

            const doingList = state.filterDoingList.filter((order) => {
                return order.id != id;
            })

            const readyList = state.filterReadyList.filter((order) => {
                return order.id != id;
            })

            const arrivalList = state.filterArrivalList.filter((order) => {
                return order.id != id;
            })

            
            return {
                ...state,
                filterToDoList: toDoList,
                filterDoingList: doingList,
                filterReadyList: readyList,
                filterArrivalList: arrivalList
            }
        }

        default:
            return state;
    }

}

export default ordersReducer;