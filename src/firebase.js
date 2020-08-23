// const firebaseConfig = {
//     apiKey: "AIzaSyB_9UCgUjla00O3_landXMXbgOykFyqTcI",
//     authDomain: "cptodoappyt.firebaseapp.com",
//     databaseURL: "https://cptodoappyt.firebaseio.com",
//     projectId: "cptodoappyt",
//     storageBucket: "cptodoappyt.appspot.com",
//     messagingSenderId: "143027630724",
//     appId: "1:143027630724:web:b01133c707d0cb25c788d1"
//   };

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB_9UCgUjla00O3_landXMXbgOykFyqTcI",
  authDomain: "cptodoappyt.firebaseapp.com",
  databaseURL: "https://cptodoappyt.firebaseio.com",
  projectId: "cptodoappyt",
  storageBucket: "cptodoappyt.appspot.com",
  messagingSenderId: "143027630724",
  appId: "1:143027630724:web:b01133c707d0cb25c788d1",
});

const db = firebaseApp.firestore();

export { db };
