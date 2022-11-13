import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyCUKxmHTfseNLyA6o894RQDGhC_QCGUG5s",
  authDomain: "conversopay.firebaseapp.com",
  projectId: "conversopay",
  storageBucket: "conversopay.appspot.com",
  messagingSenderId: "23039881288",
  appId: "1:23039881288:web:41bfcb2d1f42bde72ce87d",
  measurementId: "G-BRHGXV6J9L",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
