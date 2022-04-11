// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA4_haDQRYrFL65vwUgmY61afSr6ygspug",
    authDomain: "ema-jhon-email-password.firebaseapp.com",
    projectId: "ema-jhon-email-password",
    storageBucket: "ema-jhon-email-password.appspot.com",
    messagingSenderId: "10678629488",
    appId: "1:10678629488:web:985047a5905eaf26bc30b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;