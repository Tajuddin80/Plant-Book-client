import { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { AuthContext } from "./AuthContext";
import { auth } from "../../Firebase/firebase.init";
import Swal from "sweetalert2";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Signup
  const handleEmailSignup = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Signin
  const handleEmailSignin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Google
  const handleGoogleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Signout
  const handleLogout = () => {
    setLoading(true);
    return signOut(auth);
  };

  const handleGoogleClick = async (setGoogleUser, setSuccess, setError) => {
    try {
      const result = await handleGoogleSignIn();
      const user = result.user;

      setGoogleUser(user);
      setSuccess("Google sign-in success");

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Google Sign-in Successful",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.error("Google sign-in error:", error.message);
      setError(error.message);

      Swal.fire({
        position: "center",
        icon: "error",
        title: "Sign-in Failed",
        text: error.message,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        await currentUser.reload(); 
        setUser(auth.currentUser); 
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        handleGoogleSignIn,
        handleEmailSignup,
        handleEmailSignin,
        handleLogout,
        handleGoogleClick,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
