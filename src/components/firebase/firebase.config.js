// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCy9X31R36uco_-9iwuimzREuyzik7tjhM",
  authDomain: "programming-hero-assignm-aba54.firebaseapp.com",
  projectId: "programming-hero-assignm-aba54",
  storageBucket: "programming-hero-assignm-aba54.appspot.com",
  messagingSenderId: "577632386453",
  appId: "1:577632386453:web:6ada5563f8d19dcdd58a9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;