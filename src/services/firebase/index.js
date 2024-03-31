// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3sE4Vd4yC1LC5CSA6DSiU9hvTA7xf9bk",
  authDomain: "coderhouse-ecommerce-espof.firebaseapp.com",
  projectId: "coderhouse-ecommerce-espof",
  storageBucket: "coderhouse-ecommerce-espof.appspot.com",
  messagingSenderId: "221676994048",
  appId: "1:221676994048:web:6815fc80547375c3c0a2e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);