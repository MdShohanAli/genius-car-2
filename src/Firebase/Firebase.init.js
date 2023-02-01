// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAjfay48rpU6jHJaiJidVNJ8hgknKSqZtg",
    authDomain: "complete-genius-car.firebaseapp.com",
    projectId: "complete-genius-car",
    storageBucket: "complete-genius-car.appspot.com",
    messagingSenderId: "677680939736",
    appId: "1:677680939736:web:4677d2ae6948d9e3460dad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;
