// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGrWOoQN45UFcc8Wexh82Za_XuQthvke4",
  authDomain: "voltage-f74f2.firebaseapp.com",
  projectId: "voltage-f74f2",
  storageBucket: "voltage-f74f2.firebasestorage.app",
  messagingSenderId: "379432441051",
  appId: "1:379432441051:web:2295ca0ffefaf07a36e8fe",
  measurementId: "G-D3TLJYKTBE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

export { auth }