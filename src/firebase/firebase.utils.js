import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyA39xMO_kKI0V_UzVb6QmErpNQE2TLEXt8",
  authDomain: "ecommerce-e5675.firebaseapp.com",
  databaseURL: "https://ecommerce-e5675.firebaseio.com",
  projectId: "ecommerce-e5675",
  storageBucket: "",
  messagingSenderId: "202127927580",
  appId: "1:202127927580:web:9237594cd87d58ef"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;