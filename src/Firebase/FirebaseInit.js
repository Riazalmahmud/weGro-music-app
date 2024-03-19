import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC7noI1g0lNiboz3HyWTv4eQTGJ06MIKOY",
  authDomain: "wegroreact.firebaseapp.com",
  projectId: "wegroreact",
  storageBucket: "wegroreact.appspot.com",
  messagingSenderId: "64405533181",
  appId: "1:64405533181:web:7b1dc25f4a258abfe16994",
  measurementId: "G-YRB79Z7ZEQ"
};
const app = initializeApp(firebaseConfig);
export default app;