// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyDp1g5-ffO2nokq-0Ug7TwFMc_FADWkTCI",
  authDomain: "react-6fc20.firebaseapp.com",
  projectId: "react-6fc20",
  storageBucket: "react-6fc20.appspot.com",
  messagingSenderId: "941045966640",
  appId: "1:941045966640:web:9cc78a6969ce0b4f630af5",
  measurementId: "G-2MTVLX3JFX",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
