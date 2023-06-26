// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEsiLPVAEQHETtyVwurqbDpAM5g9xxTXM",
  authDomain: "todo-app-ea9df.firebaseapp.com",
  projectId: "todo-app-ea9df",
  storageBucket: "todo-app-ea9df.appspot.com",
  messagingSenderId: "979192279438",
  appId: "1:979192279438:web:8f729c85a3da0b0fc2f4df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)