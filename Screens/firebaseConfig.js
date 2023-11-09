import { AppRegistry } from 'react-native';
import { initializeApp } from '@react-native-firebase/app';
import { getFirestore } from '@react-native-firebase/firestore';
import App from '../App'; // Your main app component
import { name as appName } from '../app.json';
//import firebase from 'firebase'
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

 
    
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

AppRegistry.registerComponent(appName, () => App);

  