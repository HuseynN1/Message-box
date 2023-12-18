// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-0L28XxmCVWPGAfsDveNeFt4fGac9CpI",
  authDomain: "chat-box-82e92.firebaseapp.com",
  projectId: "chat-box-82e92",
  storageBucket: "chat-box-82e92.appspot.com",
  messagingSenderId: "749032576643",
  appId: "1:749032576643:web:8d2f386d6799424c0f2db6",
  measurementId: "G-EV9FNL7CJ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db=getDatabase(app)