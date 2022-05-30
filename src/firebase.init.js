// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkgz4m__N0nYm9rxN9aKoDIOwGIG8yrm8",
  authDomain: "computer-organs-4117f.firebaseapp.com",
  projectId: "computer-organs-4117f",
  storageBucket: "computer-organs-4117f.appspot.com",
  messagingSenderId: "128900592102",
  appId: "1:128900592102:web:065ab7fd4a37f1b217e627"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;