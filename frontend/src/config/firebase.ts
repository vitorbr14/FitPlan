// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDQlpqIvH1cDSoNwR5BkftfvCOq5qxEsiU",
  authDomain: "fitplan-afd56.firebaseapp.com",
  projectId: "fitplan-afd56",
  storageBucket: "fitplan-afd56.appspot.com",
  messagingSenderId: "616700102151",
  appId: "1:616700102151:web:31bfdfe622d953257acca2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
