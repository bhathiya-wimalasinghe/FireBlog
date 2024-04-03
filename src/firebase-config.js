import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB8qsWVP37JNDUrPaZgTAAX-Y87HyUqvzg",
  authDomain: "blog-8e22f.firebaseapp.com",
  projectId: "blog-8e22f",
  storageBucket: "blog-8e22f.appspot.com",
  messagingSenderId: "530959039252",
  appId: "1:530959039252:web:9678d52b0a3aeb02fce001",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const storage = getStorage(firebaseApp);
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
