// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-2549b.firebaseapp.com",
  projectId: "mern-estate-2549b",
  storageBucket: "mern-estate-2549b.appspot.com",
  messagingSenderId: "867702771171",
  appId: "1:867702771171:web:9228be0ee469ca23e464d6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);