// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCL6DVhGEXrR_FdWHIbgX1I1o02dxjLIHk",
  authDomain: "prepwave-a5248.firebaseapp.com",
  projectId: "prepwave-a5248",
  storageBucket: "prepwave-a5248.firebasestorage.app",
  messagingSenderId: "132903657952",
  appId: "1:132903657952:web:cbceab847f358f3e384b85",
  measurementId: "G-KYP6NDVF3C"
};



// Initialize Firebase
const app = !getApps.length? initializeApp(firebaseConfig):getApp();
export const auth = getAuth(app)
export const db = getFirestore(app)