// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBP9-pkfb0V3U-ZgOCpgGC4lqhJVmxWbs4",
  authDomain: "comfy-15e00.firebaseapp.com",
  projectId: "comfy-15e00",
  storageBucket: "comfy-15e00.appspot.com",
  messagingSenderId: "1019939925831",
  appId: "1:1019939925831:web:710043194e5992963ba662",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
