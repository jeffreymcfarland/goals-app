import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// Firebase web config
const config = {
  apiKey: "AIzaSyDMFd3EXJjtOkQkSGgLtMv4S7bcA97YoZg",
  authDomain: "goals-app-c4350.firebaseapp.com",
  databaseURL: "https://goals-app-c4350-default-rtdb.firebaseio.com",
  projectId: "goals-app-c4350",
  storageBucket: "goals-app-c4350.appspot.com",
  messagingSenderId: "997575422610",
  appId: "1:997575422610:web:b7db185f5af9e37fd22c4b",
  measurementId: "G-N7LJ943ZTE",
};

let instance = null;

export default function getFirebase() {
  if (typeof window !== "undefined") {
    if (instance) return instance;
    instance = firebase.initializeApp(config);
    return instance;
  }

  return null;
}
