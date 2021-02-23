import * as firebase from 'firebase'
export const listenOrder = async (orderId, returnValue) => {
    firebase.database().ref(orderId).on('value', (snapshot) => {
        returnValue(snapshot.val().timeRemain)
    });
}
