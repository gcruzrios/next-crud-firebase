// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



import {getFirestore} from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBldnAKplpyhALJOcoiTbXpBDghIW-URJg",
  authDomain: "nextjs-crud-84419.firebaseapp.com",
  projectId: "nextjs-crud-84419",
  storageBucket: "nextjs-crud-84419.appspot.com",
  messagingSenderId: "278265709904",
  appId: "1:278265709904:web:7a2641db1ab95aeaae5855"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//enviar Firebase
const bd = getFirestore();
export {bd}