//firebaseConfig.js
import * as firebase from 'firebase';
import 'firebase/auth';
// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyA-1_M8ZRIe6N-AgWKZwWsgtLOmVnLApjQ",
    authDomain: "circlee-a4b5d.firebaseapp.com",
    projectId: "circlee-a4b5d",
    storageBucket: "circlee-a4b5d.appspot.com",
    messagingSenderId: "361381373341",
    appId: "1:361381373341:web:0838b1f671b92f56d2bb74",
    measurementId: "G-NGWS4NW9QB"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }