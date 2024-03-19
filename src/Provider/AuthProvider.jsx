import React, { createContext, useEffect, useState } from "react";
import {
  signInWithPopup,
  GoogleAuthProvider,
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import app from "../Firebase/FirebaseInit";
import { redirect } from 'react-router-dom';
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [users, setUserInfo] = useState(null);
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);

  const loginWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const createUserWithUserPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logInWithUserPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
     
        setUserInfo(user);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const providerValue = {
    users,
    loginWithGoogle,
    logOut,
    logInWithUserPassword,
    createUserWithUserPassword,
  };
  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
