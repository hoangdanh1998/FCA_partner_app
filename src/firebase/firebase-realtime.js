import * as firebase from 'firebase';
export const listenOrder = async (orderId, returnValue) => {
    firebase.database().ref('order').child(orderId).on('value', (snapshot) => {
        if(snapshot)
            returnValue(snapshot.val())
    });
}

export const stopListenOrder = async (orderId) => {
    firebase.database().ref('order').child(orderId).on('value');
}

export const listenInComingOrder = async (partnerId, returnValue) => {
    const ref = firebase.database().ref('partner');
    ref.child(partnerId).child('in-coming-order').on('value', (snapshot) => {
        returnValue(snapshot.val());
    })
}

export const stopListenInComingOrder = async (partnerId) => {
    const ref = firebase.database().ref('partner');
    ref.child(partnerId).child('in-coming-order').off('value', () => { });
}
