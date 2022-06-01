import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAVyuEp0n9QwCetXluunD5lfCe5iCH7Hq4",
    authDomain: "tinder-clone-75c0e.firebaseapp.com",
    projectId: "tinder-clone-75c0e",
    storageBucket: "tinder-clone-75c0e.appspot.com",
    messagingSenderId: "550867419184",
    appId: "1:550867419184:web:e6edb0e238d4b03c31edf5",
    measurementId: "G-12TC9YBFNE"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const database = firebaseApp.firestore()

export default database;

