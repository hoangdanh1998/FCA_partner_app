import { AUTO_ACCEPT_ORDER } from '../action-types/action';
const initialState = {
    autoAcceptOrder: false
}

const behaviorReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTO_ACCEPT_ORDER: {
            return { ...state, autoAcceptOrder: action.payload.autoAcceptOrder };
        }
        default:
            return state;
    }

}

export default behaviorReducer;