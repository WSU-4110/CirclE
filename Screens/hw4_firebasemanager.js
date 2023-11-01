// Implementing singleton pattern to make sure database is only initialized once 
class FirebaseManager {
  constructor() {
    if (FirebaseManager.instance) {
      return FirebaseManager.instance;
    }

    // Initialize Firebase and set up the database connection.
    this.db = firebase.firestore();
    
    FirebaseManager.instance = this;
  }

  // Add methods for interacting with the database.
  // For example, methods for searching and retrieving data.

  static getInstance() {
    if (!FirebaseManager.instance) {
      FirebaseManager.instance = new FirebaseManager();
    }
    return FirebaseManager.instance;
  }
}

// Usage:
const firebaseManager = FirebaseManager.getInstance();
//firebaseConfig.js
//
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
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

export const db = getFirestore(app);