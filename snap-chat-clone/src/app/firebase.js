import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyByID_9aSu2L_jGDa207wVnRZh9h_r_XEo",
    authDomain: "snap-chat-clone-6ff76.firebaseapp.com",
    projectId: "snap-chat-clone-6ff76",
    storageBucket: "snap-chat-clone-6ff76.appspot.com",
    messagingSenderId: "989365924048",
    appId: "1:989365924048:web:aed941b586ab14eab36ed5"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };