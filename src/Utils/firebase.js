// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiIiZob8a6wsszlXji8mURHtFSCCI1DjM",
  authDomain: "the-dude-shop.firebaseapp.com",
  projectId: "the-dude-shop",
  storageBucket: "the-dude-shop.appspot.com",
  messagingSenderId: "138029754870",
  appId: "1:138029754870:web:227ec10776fa16cd757fd7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
