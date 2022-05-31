// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//for my firestore database
import { getFirestore } from "firebase/firestore";
//for authentication
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDFO-vI1YNLPJHIkiffYwhesJUz8Mb3krk",
    authDomain: "react-clone-40fc5.firebaseapp.com",
    projectId: "react-clone-40fc5",
    storageBucket: "react-clone-40fc5.appspot.com",
    messagingSenderId: "330909398826",
    appId: "1:330909398826:web:4390bed68d71c4e69f1053"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore 
export const db = getFirestore(app);

// Initialize Firebase Authentication 
export const auth = getAuth(app);


