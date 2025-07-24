// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
  remove,
  set,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiZQLD3qgMLGYVteU6UYngt7QuV6dMjOg",
  authDomain: "ulangtahunputri-b61e1.firebaseapp.com",
  databaseURL: "https://ulangtahunputri-b61e1-default-rtdb.firebaseio.com",
  projectId: "ulangtahunputri-b61e1",
  storageBucket: "ulangtahunputri-b61e1.firebasestorage.app",
  messagingSenderId: "1057606872796",
  appId: "1:1057606872796:web:2bde1b04af4c5e05e1ce19",
  measurementId: "G-QTZ26XWNN9"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, push, onValue, remove, set };
