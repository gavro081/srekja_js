import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC12g88xT-hlSPSZYzbD3KhJ4kD2autUAs",
  authDomain: "hakaton-best.firebaseapp.com",
  projectId: "hakaton-best",
  storageBucket: "hakaton-best.firebasestorage.app",
  messagingSenderId: "943382158455",
  appId: "1:943382158455:web:7c2278fc5f04424119ba72",
  measurementId: "G-4FRE9JCRLP"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore(app)