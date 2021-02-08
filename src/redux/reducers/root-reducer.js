import {combineReducers} from 'redux';
import ordersReducer from './orderList';



//store tong cua ung dung
export const rootReducer = combineReducers({
    //noi chua cac reducer con
    orderList: ordersReducer
});