import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB7kwhp5p3nX5jQX8P3jxgFxVRV6KlGTTA",
    authDomain: "car-rental-68f5e.firebaseapp.com",
    projectId: "car-rental-68f5e",
    storageBucket: "car-rental-68f5e.firebasestorage.app",
    messagingSenderId: "974126873385",
    appId: "1:974126873385:web:5ce21791458f3f00d81538",
    measurementId: "G-0ZDN1BT8H6"
  };
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
