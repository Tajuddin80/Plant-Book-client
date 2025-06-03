import React from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../../Firebase/firebase.init";
import { GoogleAuthProvider,createUserWithEmailAndPassword ,signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

const AuthProvider = ({ children }) => {
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    return signInWithPopup(auth, provider);
  };

  const handleEmailSignup = (email, password)=>{
    
return createUserWithEmailAndPassword(auth, email, password)

  }
  const handleEmailSignin = (email, password)=>{

return signInWithEmailAndPassword(auth, email, password)
  }







  return (<AuthContext value={{ handleGoogleSignIn, handleEmailSignin , handleEmailSignup}}>{children}</AuthContext>);
};

export default AuthProvider;
