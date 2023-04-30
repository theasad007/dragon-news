// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjSSSo3LpITDDUvNhzMfD-4Bv37d4ripQ",
  authDomain: "the-news-dragon-e835d.firebaseapp.com",
  projectId: "the-news-dragon-e835d",
  storageBucket: "the-news-dragon-e835d.appspot.com",
  messagingSenderId: "886547678805",
  appId: "1:886547678805:web:b49025cd050ffe3e0576dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;