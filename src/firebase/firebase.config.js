// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTwt69JSQx4lGQUg6w0fqQqzJFtdHbqdo",
  authDomain: "fir-conceptual-one.firebaseapp.com",
  projectId: "fir-conceptual-one",
  storageBucket: "fir-conceptual-one.appspot.com",
  messagingSenderId: "338565413577",
  appId: "1:338565413577:web:581dd409f499ce8c24ab18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;