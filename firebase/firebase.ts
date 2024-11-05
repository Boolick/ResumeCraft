// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjF-5wszT294v-Vt286xLay-b2y4RszCU",
  authDomain: "personalblogplatform.firebaseapp.com",
  projectId: "personalblogplatform",
  storageBucket: "personalblogplatform.appspot.com",
  messagingSenderId: "688960105710",
  appId: "1:688960105710:web:d034f5b6e539bc26bb97ff",
  measurementId: "G-3428EYXE73",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, analytics };
