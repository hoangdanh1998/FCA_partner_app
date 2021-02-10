import { modalVisible, VISIBLE } from "../action/modal";

const initialState = {
    modalVisible: false
}

const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case VISIBLE:
            let modalVisible = state.modalVisible;
            return {modalVisible: !modalVisible};
        default:
            console.log("123");
            return state;
    }

}

export default modalReducer;