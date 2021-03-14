import { combineReducers } from 'redux';
import { SIGN_OUT } from '../actions/account';
import accountReducer from './account';
import behaviorReducer from './behavior';
import modalReducer from './modal';
import ordersReducer from './order-list';


//store tong cua ung dung
const appReducer = combineReducers({
    //noi chua cac reducer con
    orderList: ordersReducer,
    modalVisible: modalReducer,
    behavior: behaviorReducer,
    account: accountReducer
});

const rootReducer = (state, action) => {
    if (action === SIGN_OUT) {
        state.orderList = undefined;
        
    }

    return appReducer(state, action);
};

export default rootReducer; 