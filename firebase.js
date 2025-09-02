// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};





const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyC0lB-rqD9u617w4Ulsw0Dt-tHi_-IxadQ",
//   authDomain: "nextjs-todoapp-782fa.firebaseapp.com",
//   projectId: "nextjs-todoapp-782fa",
//   storageBucket: "nextjs-todoapp-782fa.firebasestorage.app",
//   messagingSenderId: "143231936308",
//   appId: "1:143231936308:web:8fdda2fb2a8a1783f1a761"
// };