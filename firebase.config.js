// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMFd3EXJjtOkQkSGgLtMv4S7bcA97YoZg",
  authDomain: "goals-app-c4350.firebaseapp.com",
  projectId: "goals-app-c4350",
  storageBucket: "goals-app-c4350.appspot.com",
  messagingSenderId: "997575422610",
  appId: "1:997575422610:web:b7db185f5af9e37fd22c4b",
  measurementId: "G-N7LJ943ZTE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
