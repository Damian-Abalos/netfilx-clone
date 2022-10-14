// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC17aCPu9f2lRvyuLHoqGlO2btFPWpRYSQ",
  authDomain: "netflix-clone-7541a.firebaseapp.com",
  projectId: "netflix-clone-7541a",
  storageBucket: "netflix-clone-7541a.appspot.com",
  messagingSenderId: "567952805864",
  appId: "1:567952805864:web:7dcaa913d7667811c55e5d"
};
console.log(firebaseConfig);

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)