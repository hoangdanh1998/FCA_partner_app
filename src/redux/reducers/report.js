const { GET_REPORT_PARTNER } = require("../actions/report");

const initialState = {
    report: null,
    cancellationOrder: null,
    rejectionOrder: null,
    receptionOrder: null
}

const reportReducer = (state = initialState, action) => {
    console.log("action type get repport",action.type);
    switch (action.type) {
        case GET_REPORT_PARTNER: {
            const data = action.payload;
            // console.log("data", data);
            return {
                ...state,
                report: data,
                cancellationOrder: data.orders.CANCELLATION,
                rejectionOrder: data.orders.REJECTION,
                receptionOrder: data.orders.RECEPTION
            }
        }

        default:
            return state;
    }
}

export default reportReducer;