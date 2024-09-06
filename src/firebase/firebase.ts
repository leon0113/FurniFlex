// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCWqilzWANvo6bOW7MRcZNItD6G9cakYgI",
    authDomain: "furniflex-97a86.firebaseapp.com",
    projectId: "furniflex-97a86",
    storageBucket: "furniflex-97a86.appspot.com",
    messagingSenderId: "40040654525",
    appId: "1:40040654525:web:4a8593b925e0e71205f9d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth }