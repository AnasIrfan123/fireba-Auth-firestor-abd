import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js"; //phly import kia firestore or phier cdn link lgya 

const firebaseConfig = {
  apiKey: "AIzaSyDlDuYlIOsUJyiwxARbkdO09HITEd6Ip38",
  authDomain: "fir-auth-24d1b.firebaseapp.com",
  projectId: "fir-auth-24d1b",
  storageBucket: "fir-auth-24d1b.appspot.com",
  messagingSenderId: "429865728479",
  appId: "1:429865728479:web:b76948935d902a319eac6a",
  measurementId: "G-K13SLHZG27"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app); //or idhr get krdya 1 he data base hoga or export krdia ab jhn jhn chaye hoga import krdeng
