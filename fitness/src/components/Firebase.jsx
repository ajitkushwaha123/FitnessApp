// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzigpzNj9de4DONpRUagD43l5-DDLTXgE",
  authDomain: "fir-53d20.firebaseapp.com",
  projectId: "fir-53d20",
  storageBucket: "fir-53d20.appspot.com",
  messagingSenderId: "1086416989306",
  appId: "1:1086416989306:web:58729e411fddd8a9761fc3",
  measurementId: "G-LCCS4G72WX",
  databaseURL : "https://fir-53d20-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);