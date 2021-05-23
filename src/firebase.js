// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCc9Ch28gRtLOkA1UfLTH3E0JX9f_ffmy0",
  authDomain: "clone-e09d2.firebaseapp.com",
  projectId: "clone-e09d2",
  storageBucket: "clone-e09d2.appspot.com",
  messagingSenderId: "1024734929157",
  appId: "1:1024734929157:web:be3b9d781e22198b6f176c",
  measurementId: "G-Q6HFZS6KRZ"
};
// initialize the firebase app
const firebaseApp=firebase.initializeApp(firebaseConfig)
// initialize the database
const db = firebaseApp.firestore();
// for authentication (sign in using firebase)
const auth = firebase.auth();

export { db, auth };