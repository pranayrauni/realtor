// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAxADL7zQBP7dVuRKLT-hA1GVxFMeXERQ",
  authDomain: "realtor-reactjs-firebase.firebaseapp.com",
  projectId: "realtor-reactjs-firebase",
  storageBucket: "realtor-reactjs-firebase.appspot.com",
  messagingSenderId: "489690535360",
  appId: "1:489690535360:web:51025ec40bcc35c13f6425"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()