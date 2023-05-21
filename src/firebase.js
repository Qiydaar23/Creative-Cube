// Import the functions you need from the SDKs you need
// require('dotenv').config()
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// console.log(process.env.APIKEY)
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaQdUm8NB0oDzPxpi7ME2zDQe7mB91P1Y",
  authDomain: "creative-cube-2b9da.firebaseapp.com",
  projectId: "creative-cube-2b9da",
  storageBucket: "creative-cube-2b9da.appspot.com",
  messagingSenderId: "833292141001",
  appId: "1:833292141001:web:6eacbb45043005e540a818",
  measurementId: "G-PJ3RD3FN51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;