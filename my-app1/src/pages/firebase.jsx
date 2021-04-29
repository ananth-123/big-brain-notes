import firebase from "firebase/app";
import "firebase/auth";
import "firebase/analytics";
import "firebase/firestore";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyChGGj8ELZ52r2ytxaY8sS05W7lcWNk8Vg",
    authDomain: "big-brain-note.firebaseapp.com",
    projectId: "big-brain-note",
    storageBucket: "big-brain-note.appspot.com",
    messagingSenderId: "609166530237",
    appId: "1:609166530237:web:9aa857cb16ff58571189d4",
    measurementId: "G-QNGMVZLC4K",
  };

firebase.initializeApp(firebaseConfig);