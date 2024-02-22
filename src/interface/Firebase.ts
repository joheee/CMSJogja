import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDcCcs2Wm9j0FaS_TJNZ0-uwXRoKWHkl48",
  authDomain: "visitjogja-db.firebaseapp.com",
  projectId: "visitjogja-db",
  storageBucket: "visitjogja-db.appspot.com",
  messagingSenderId: "330154490480",
  appId: "1:330154490480:web:ff7b058e362ab9b90512b5"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const storage = getStorage(app)