
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCk56DEAl_kmrzzGPGt4rEz9w9r5XGp35w",
  authDomain: "miniblog-a4e78.firebaseapp.com",
  projectId: "miniblog-a4e78",
  storageBucket: "miniblog-a4e78.firebasestorage.app",
  messagingSenderId: "738695309766",
  appId: "1:738695309766:web:4b446f2f53511f5eed2ac7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
export default app;