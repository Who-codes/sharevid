import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCYQU9H89DkVlLL9uNRFocQJhN5Q_hQN0I",
  authDomain: "social-8f112.firebaseapp.com",
  databaseURL:
    "https://social-8f112-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "social-8f112",
  storageBucket: "social-8f112.appspot.com",
  messagingSenderId: "381634011671",
  appId: "1:381634011671:web:7ec78ea9a24a73c5b43252",
  measurementId: "G-FNS2MBVLC2",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);

// apiKey: import.meta.env.VITE_API_KEY,
//   authDomain: import.meta.env.VITE_AUTH_DOMAIN,
//   databaseURL: import.meta.env.VITE_DATABASE_URL,
//   projectId: import.meta.env.VITE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_STPRAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_APP_ID,
//   measurementId: import.meta.env.VITE_MEASUREMENT_ID,
