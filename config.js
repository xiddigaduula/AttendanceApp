import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyAL2gCXn64UNhjM-J1M7thHdFtQiMbrrsA",
  authDomain: "registration-f19ea.firebaseapp.com",
  projectId: "registration-f19ea",
  storageBucket: "registration-f19ea.appspot.com",
  messagingSenderId: "455906962962",
  appId: "1:455906962962:web:d9d9ff097d52483dd1f2cb"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);

export const db = getFirestore()

