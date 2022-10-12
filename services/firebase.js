// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnuFi9I6KVfPMS2CCmzLa1g-2uQjhFJbk",
  authDomain: "crud-clientes-3d263.firebaseapp.com",
  projectId: "crud-clientes-3d263",
  storageBucket: "crud-clientes-3d263.appspot.com",
  messagingSenderId: "86536901919",
  appId: "1:86536901919:web:ee06c914e5d57113578c2a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)