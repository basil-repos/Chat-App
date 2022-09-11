import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "chat-app-f7ca4.firebaseapp.com",
    projectId: "chat-app-f7ca4",
    storageBucket: "chat-app-f7ca4.appspot.com",
    messagingSenderId: "1092902238026",
    appId: "1:1092902238026:web:f6b6a2d0ebddcf1723f3b3",
    measurementId: "G-0KR1762FDY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();