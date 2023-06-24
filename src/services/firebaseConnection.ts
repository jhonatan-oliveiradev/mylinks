import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBPFTxAnIekf53FlIhd2qPX4CcHmHZkBTw",
  authDomain: "react-links-a2b99.firebaseapp.com",
  projectId: "react-links-a2b99",
  storageBucket: "react-links-a2b99.appspot.com",
  messagingSenderId: "353737993500",
  appId: "1:353737993500:web:101c1d25c25f11786b1ed9"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };