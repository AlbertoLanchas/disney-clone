import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB37Wsp57KTKOvCsDljPqykdDi7RlN-Z80",
  authDomain: "disneyclone-fb.firebaseapp.com",
  projectId: "disneyclone-fb",
  storageBucket: "disneyclone-fb.appspot.com",
  messagingSenderId: "367501222948",
  appId: "1:367501222948:web:613b71cdf704da9a3524b1",
  measurementId: "G-2EV5ED2G4N",
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;
