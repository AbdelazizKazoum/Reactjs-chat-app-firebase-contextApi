import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBt0Jtyv_BGdgdKyFNY1kl_906wqwq7sVg",
  authDomain: "chat-app-facd2.firebaseapp.com",
  projectId: "chat-app-facd2",
  storageBucket: "chat-app-facd2.appspot.com",
  messagingSenderId: "223224867047",
  appId: "1:223224867047:web:8dc7bd25aee8eb65c95a42",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
