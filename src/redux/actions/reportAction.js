import fca from "../../service/fca-api/fca";

export const GET_REPORT_ORDERS = "GET_REPORT_ORDERS";

export const getReport = (id, fromDate, toDate) => {
    return async dispatch => {
        try {
            console.log("Tai sao ko vo day"); 
            const response =
            await fca.get(`/partner/0440ef59-6c90-4630-8be4-553533e45591/report`, {
                data: {
                    fromDate,
                    toDate
                }
            });
            console.log("report order action", response.data.data.report.orders.RECEPTION);
            // if (response.data.meta.status !== SUCCESS) {
            //     throw new Error("Something went wrong");
            // }
            dispatch({
                type: GET_REPORT_ORDERS,
                payload: response.data.data.report
            })
        } catch (error) {
            console.error(error);
        }        
    }
};