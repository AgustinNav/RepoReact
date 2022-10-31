import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD5OptfkK6SjvCGHIXZwd-f94QhPK1lwU8",
  authDomain: "backend-tiendax.firebaseapp.com",
  projectId: "backend-tiendax",
  storageBucket: "backend-tiendax.appspot.com",
  messagingSenderId: "826489462908",
  appId: "1:826489462908:web:e6e8ed0bfb6548ef2269f9"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)