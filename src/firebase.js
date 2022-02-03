import firebase from "firebase";
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDrs9ZcwvHAozW-OuxGrtTHm2_eh8uScVU",
  authDomain: "twitter-clone-9b6be.firebaseapp.com",
  projectId: "twitter-clone-9b6be",
  storageBucket: "twitter-clone-9b6be.appspot.com",
  messagingSenderId: "1061980987067",
  appId: "1:1061980987067:web:dc3e83ea78f99bab9fd39e",
  measurementId: "G-RQC23NQZJL",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();

export default db; 
