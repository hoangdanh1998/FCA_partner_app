import * as firebase from 'firebase';
import '@firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD37qFaoB09lhAstwUz6y7QZcEGpEKo3Ak",
    authDomain: "fca-system.firebaseapp.com",
    projectId: "fca-system",
    storageBucket: "fca-system.appspot.com",
    messagingSenderId: "1072776638228",
    appId: "1:1072776638228:web:6d60cf4676d61267fd1c01"
};

firebase.initializeApp(firebaseConfig);
export default firebase;