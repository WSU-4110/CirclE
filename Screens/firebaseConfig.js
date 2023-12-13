/**************
   this is a page that uses code design: this page allows firebase to be configured once and prevents 
   more configuration and error

********************/
import firebase from 'firebase/compat/app'
import 'firebase/firestore';
import 'firebase/compat/auth'
import 'firebase/compat/database';
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
//import firebase from 'firebase/app';
//const searchClient = algoliasearch('ZGVYKOZVLW', '15dea6a36dbc2457f06dcc473813946c');

// Initialize Firebase
// Make sure to replace the configuration with your Firebase project's details

const firebaseConfig = {
  apiKey: "AIzaSyA-1_M8ZRIe6N-AgWKZwWsgtLOmVnLApjQ",
  authDomain: "circlee-a4b5d.firebaseapp.com",
  databaseURL: "https://circlee-a4b5d-default-rtdb.firebaseio.com/",
  projectId: "circlee-a4b5d",
  storageBucket: "circlee-a4b5d.appspot.com",
  messagingSenderId: "361381373341",
  appId: "1:361381373341:web:0838b1f671b92f56d2bb74",
  measurementId: "G-NGWS4NW9QB"
  
};


const app = initializeApp(firebaseConfig);

export default app;