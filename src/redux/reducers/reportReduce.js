import { GET_REPORT_ORDERS } from "../actions/reportAction";

const initialState = {
    report: null,
    cancellationOrder: null,
    rejectionOrder: null,
    receptionOrder: null
};

const reportReducer = (state = initialState, action) => {
    console.log("action type: ", action.type);
    switch (action.type) {
        case GET_REPORT_ORDERS:
            const data = action.payload;
            console.log("data,", data.orders);
            return {
                ...state,
                report: data,
                cancellationOrder: data.orders.CANCELLATION,
                rejectionOrder: data.orders.REJECTION,
                receptionOrder: data.orders.RECEPTION,
            };
        default:
            console.log("default");
            return {...state};
    }
}


export default reportReducer;