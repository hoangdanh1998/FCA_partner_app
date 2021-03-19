import { GET_REPORT_ORDERS } from "../actions/reportAction";

const initialState = {
    report: null,
    cancellationOrder: null,
    rejectionOrder: null,
    receptionOrder: null,
    closureOrder: null

};

const reportReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_REPORT_ORDERS:
            const report = action.payload;
            
            return {
                ...state,
                report,
                cancellationOrder: report.orders.CANCELLATION,
                rejectionOrder: report.orders.REJECTION,
                receptionOrder: report.orders.RECEPTION,
                closureOrder: report.orders.CLOSURE,
            };
        default:
            return {...state};
    }
}


export default reportReducer;