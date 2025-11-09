// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAe8jMhOSltXCcUdQUFYzGkeY1iTWWBYfU",
  authDomain: "book-haven-c3608.firebaseapp.com",
  projectId: "book-haven-c3608",
  storageBucket: "book-haven-c3608.firebasestorage.app",
  messagingSenderId: "578184579656",
  appId: "1:578184579656:web:c0f91fbb1154677bdae67d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)