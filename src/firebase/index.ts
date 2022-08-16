import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBTZ_FJAo0pdvg4MIxgXKbOn7yLBrdzjHE",
  authDomain: "vue-keep-e8959.firebaseapp.com",
  databaseURL: "https://vue-keep-e8959-default-rtdb.firebaseio.com",
  projectId: "vue-keep-e8959",
  storageBucket: "vue-keep-e8959.appspot.com",
  messagingSenderId: "407757338644",
  appId: "1:407757338644:web:f209f822011c8c08a74f01",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
