// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
import "firebase/firestore"
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSGDqtvhTI2JIVq4wsDPxsHxPQCXxGXPQ",
  authDomain: "meetup-5d60e.firebaseapp.com",
  projectId: "meetup-5d60e",
  storageBucket: "meetup-5d60e.appspot.com",
  messagingSenderId: "1064648260499",
  appId: "1:1064648260499:web:8e47419a8dd1fd0c538666",
  measurementId: "G-CDW46WKD8S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = app.firestore();
export {app,firestore}