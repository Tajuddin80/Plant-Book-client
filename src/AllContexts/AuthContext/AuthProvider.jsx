import { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../../Firebase/firebase.init";
import Swal from "sweetalert2";
import { AuthContext } from "./AuthContext";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Email Signup
  const handleEmailSignup = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Email Signin
  const handleEmailSignin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Google Signin
  const handleGoogleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Google helper
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

      const userInfo = {
        name: user?.displayName,
        photo: user?.photoURL,
        email: user?.email,
      };

      await fetch("http://localhost:3000/adduser", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userInfo),
      });
    } catch (error) {
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

  // Sign Out
  const handleLogout = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Listen to auth state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext
      value={{
        user,
        loading,
        handleEmailSignup,
        handleEmailSignin,
        handleLogout,
        handleGoogleClick,
        setUser,
      }}
    >
      {children}
    </AuthContext>
  );
};

export default AuthProvider;
