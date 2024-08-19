// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: "pet-adopt-3d868.firebaseapp.com",
  projectId: "pet-adopt-3d868",
  storageBucket: "pet-adopt-3d868.appspot.com",
  messagingSenderId: "875886289423",
  appId: "1:875886289423:web:8de421dadab5f5ebceb97a",
  measurementId: "G-77DE4S21E2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
//const analytics = getAnalytics(app);