// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCFh7c6fGOLfHn330cqvm1Icch-JujpR8Y",
    authDomain: "pc-part-store.firebaseapp.com",
    projectId: "pc-part-store",
    storageBucket: "pc-part-store.appspot.com",
    messagingSenderId: "34982462626",
    appId: "1:34982462626:web:97f1cdb17c6adf0a0b83fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const signInWithGoogle = () => signInWithPopup(auth, provider);