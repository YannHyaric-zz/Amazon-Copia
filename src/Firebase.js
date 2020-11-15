import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTdhIfXV6fL__Jdh7XT7kVBB8hPm8iPNM",
  authDomain: "amazom-copia.firebaseapp.com",
  databaseURL: "https://amazom-copia.firebaseio.com",
  projectId: "amazom-copia",
  storageBucket: "amazom-copia.appspot.com",
  messagingSenderId: "373363573172",
  appId: "1:373363573172:web:80e48ab53873e1b7ebf2e1",
  measurementId: "G-KLQNYYC0ZM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
