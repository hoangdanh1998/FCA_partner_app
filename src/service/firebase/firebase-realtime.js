import * as firebase from "firebase";


export const setDeviceKeyFirebase = async (accountId, deviceKey) => {
    if (deviceKey) {
        await firebase.database().ref("account").child(accountId).update({
            id: accountId,
            deviceKey,
        });
    }
};

export const getDeviceKeyOnChange = (accountId, account) => {
    if (accountId) {
        const ref = firebase.database().ref("account");
        ref.child(accountId).on("value", (snapshot) => {
            account(snapshot.val());
        });
    }
};