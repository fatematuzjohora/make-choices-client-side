// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3gGDpll9oUNVB1AuuOPZXtfPBbKfZP-8",
  authDomain: "make-choices.firebaseapp.com",
  projectId: "make-choices",
  storageBucket: "make-choices.appspot.com",
  messagingSenderId: "777549993892",
  appId: "1:777549993892:web:aee1c4cf80773db2359331"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;