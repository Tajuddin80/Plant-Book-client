import React from "react";
import { AuthContext } from "./AuthContext";

import { auth } from "../../Firebase/firebase.init";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const AuthProvider = ({ children }) => {
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    return signInWithPopup(auth, provider);
  };
  return (<AuthContext value={{ handleGoogleSignIn }}>{children}</AuthContext>);
};

export default AuthProvider;
