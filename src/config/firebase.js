import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyChb0FIFrkjLWfgYuR_XRY-lXRtPLb2FUs",
  authDomain: "pace-stock-assignment.firebaseapp.com",
  projectId: "pace-stock-assignment",
  storageBucket: "pace-stock-assignment.appspot.com",
  messagingSenderId: "51048904510",
  appId: "1:51048904510:web:eab6f2455a776bef815e6f",
  measurementId: "G-0DFGJPTWZD",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


export { auth, googleProvider };
