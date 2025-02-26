// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence, setPersistence } from 'firebase/auth';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from 'firebase/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD72xiI6J6cBGSXdg0qZT1fBkpbjWC7jMY",
  authDomain: "healify-4f836.firebaseapp.com",
  projectId: "healify-4f836",
  storageBucket: "healify-4f836.firebasestorage.app",
  messagingSenderId: "848770863177",
  appId: "1:848770863177:web:f7792f76ee7684be032f98"
};

// Initialize Firebase
const FIREBASE_APP = initializeApp(firebaseConfig);
const FIREBASE_AUTH = initializeAuth(FIREBASE_APP);
setPersistence(FIREBASE_AUTH, getReactNativePersistence(AsyncStorage))
  .then(() => console.log("Auth persistence set"))
  .catch((error) => console.error("Error setting persistence:", error)); 
const FIREBASE_DB = getFirestore(FIREBASE_APP); 

export { FIREBASE_APP, FIREBASE_AUTH, FIREBASE_DB };