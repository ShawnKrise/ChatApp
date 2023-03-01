import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyCKrnjxsmsKmRqZ5gxI0yJ4JiMWmcnsV78",
  authDomain: "chat-9d31d.firebaseapp.com",
  projectId: "chat-9d31d",
  storageBucket: "chat-9d31d.appspot.com",
  messagingSenderId: "930953308041",
  appId: "1:930953308041:web:2adadc2ef892780179e358"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();