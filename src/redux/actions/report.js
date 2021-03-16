export const GET_REPORT_PARTNER = "GET_REPORT_PARTNER";
import { SUCCESS } from "../../constance/constance";
import fca from "../../service/fca-api/fca";

export const getReport = (id, fromDate, toDate) => {
    return async dispatch => {
        try {
            const response = await
            fca.get(`/partner/${id}/report`, {fromDate, toDate});
            // console.log("response get report: ", response.data.data.report);
            if (response.data.meta.status !== SUCCESS) {
                throw new Error("Something went wrong");
            }
            dispatch({
                type: GET_REPORT_PARTNER,
                payload: response.data.data.report
            })
        } catch (error) {
            console.error(error);
        }
        
    }
};