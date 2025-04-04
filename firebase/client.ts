// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCL6DVhGEXrR_FdWHIbgX1I1o02dxjLIHk",
	authDomain: "prepwave-a5248.firebaseapp.com",
	projectId: "prepwave-a5248",
	storageBucket: "prepwave-a5248.firebasestorage.app",
	messagingSenderId: "132903657952",
	appId: "1:132903657952:web:cbceab847f358f3e384b85",
	measurementId: "G-KYP6NDVF3C",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
