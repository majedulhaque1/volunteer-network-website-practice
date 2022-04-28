// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDfIMbdeyy1ShTsk9XAesVhlOmBrGJEdo",
  authDomain: "volunteer-network-30129.firebaseapp.com",
  projectId: "volunteer-network-30129",
  storageBucket: "volunteer-network-30129.appspot.com",
  messagingSenderId: "1086712809068",
  appId: "1:1086712809068:web:29626a4ec34a9463acfa49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
