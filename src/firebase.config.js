import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCgAh-ezfo7vHt-qCi3hClZtq1veOwAa3c",
  authDomain: "medium-clone-6672d.firebaseapp.com",
  projectId: "medium-clone-6672d",
  storageBucket: "medium-clone-6672d.appspot.com",
  messagingSenderId: "147566565632",
  appId: "1:147566565632:web:5111c1eb29a60fcc11fbe5",
  measurementId: "G-854V2TRKMT"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };