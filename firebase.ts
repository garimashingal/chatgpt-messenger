import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: "chatgpt-messenger-db95d",
  storageBucket: "chatgpt-messenger-db95d.firebasestorage.app",
  messagingSenderId: "1093461273545",
  appId: "1:1093461273545:web:c4d6a1f23e5e3c7eb25618",
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };
