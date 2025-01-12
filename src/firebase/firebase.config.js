// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqWELYSdQFnFH9NQqcjbACktoRlf4r4_4",
  authDomain: "react-dragon-news-auth-2ad0c.firebaseapp.com",
  projectId: "react-dragon-news-auth-2ad0c",
  storageBucket: "react-dragon-news-auth-2ad0c.firebasestorage.app",
  messagingSenderId: "1067932447497",
  appId: "1:1067932447497:web:dcfe71b9e26d31c3bcd9d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;