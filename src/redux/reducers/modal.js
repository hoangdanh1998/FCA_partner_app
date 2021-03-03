import { modalVisible, VISIBLE } from "../actions/modal";

const initialState = {
    modalVisible: false
}

const modalReducer = (state = initialState, action) => {
    console.log(action.type)
    switch (action.type) {
        case VISIBLE:
            let modalVisible = state.modalVisible;
            return {modalVisible: !modalVisible};
        default:
            return state;
    }

}

export default modalReducer;