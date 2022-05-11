import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAYx2tPDmwWlm338-cBTWizesoy44hhfNk",
    authDomain: "doctors-portal-b9c73.firebaseapp.com",
    projectId: "doctors-portal-b9c73",
    storageBucket: "doctors-portal-b9c73.appspot.com",
    messagingSenderId: "660899560631",
    appId: "1:660899560631:web:e5745d93fa3d5214376132",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;