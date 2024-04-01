// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firestore/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFLjO-kCq_TxS5cl5ZgGg-_mHYs3aWdY8",
  authDomain: "mvp-ads.firebaseapp.com",
  projectId: "mvp-ads",
  storageBucket: "mvp-ads.appspot.com",
  messagingSenderId: "1069824025229",
  appId: "1:1069824025229:web:e6e7a68af4a87e72d5f8c4",
  measurementId: "G-XFZVQ3BHV7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {db};