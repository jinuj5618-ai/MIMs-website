// firebase-config.js

// 1. Import the tools from Google
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

// 2. YOUR SPECIFIC KEYS (Paste the text from Firebase Console here)
const firebaseConfig = {
  apiKey: "AIzaSyDq4MCn_0WmlVVASaWmOOAgJQLczzPEpR8",
  authDomain: "mims-website-1204e.firebaseapp.com",
  projectId: "mims-website-1204e",
  storageBucket: "mims-website-1204e.firebasestorage.app",
  messagingSenderId: "114693214361",
  appId: "1:114693214361:web:5a4beb5f72c8eb56a76808",
  measurementId: "G-PXWQKDFRPW"
};


// 3. Start the Engine
const app = initializeApp(firebaseConfig);

// 4. Export the tools so other pages can use them
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

console.log("Firebase Connected");