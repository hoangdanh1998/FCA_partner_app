import { combineReducers } from 'redux';
import { SIGN_OUT } from '../actions/account';
import accountReducer from './account';
import behaviorReducer from './behavior';
import modalReducer from './modal';
import ordersReducer from './order-list';
import reportReducer from './report';


//store tong cua ung dung
const appReducer = combineReducers({
    //noi chua cac reducer con
    orderList: ordersReducer,
    modalVisible: modalReducer,
    behavior: behaviorReducer,
    account: accountReducer,
    report: reportReducer
});

const rootReducer = (state, action) => {
    if (action === SIGN_OUT) {
        state.orderList = undefined;
        
    }

    // console.log("repport in root", state.report);
    return appReducer(state, action);
};

export default rootReducer; 