import { useState, useContext, useEffect } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../AllContexts/AuthContext/AuthContext";
import Swal from "sweetalert2";
import { updateProfile, getAuth } from "firebase/auth";

const Signup = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [googleUser, setGoogleUser] = useState(null);

  const {  handleEmailSignup, handleGoogleClick } = useContext(AuthContext);

  const handleEmailSignupFunc = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const signupDetails = Object.fromEntries(formData.entries());
    const { name, photourl, email, password } = signupDetails;

    const isValidLength = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasSpecialChar = /[^A-Za-z0-9]/.test(password);

    if (!isValidLength || !hasUpperCase || !hasLowerCase || !hasSpecialChar) {
      setError(
        "Password must be at least 8 characters and include uppercase, lowercase, and a special character."
      );
      return;
    }

    setError("");

    try {
      const result = await handleEmailSignup(email, password);
      const user = result.user;

      await updateProfile(user, {
        displayName: name,
        photoURL: photourl,
      });

      await getAuth().currentUser.reload();
      setSuccess("Sign up successful");
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Signup Successful",
        showConfirmButton: false,
        timer: 1500,
      });

      console.log("User info after profile update:", {
        name: user?.displayName,
        photo: user?.photoURL,
        email: user?.email,
      });

      await fetch("http://localhost:3000//adduser", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name: user?.displayName,
          photo: user?.photoURL,
          email: user?.email,
        }),
      });
    } catch (err) {
      console.error("Signup error:", err.message);
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Signup Failed",
        showConfirmButton: false,
        timer: 1500,
      });
      setError(err.message);
    }
  };



  const onGoogleSignIn = () => {
    handleGoogleClick(setGoogleUser, setSuccess, setError);
  };

  useEffect(() => {
    if (googleUser) {
      const name =
        googleUser.displayName || googleUser.providerData?.[0]?.displayName;
      const photo =
        googleUser.photoURL || googleUser.providerData?.[0]?.photoURL;
      const email = googleUser.email || googleUser.providerData?.[0]?.email;

      console.log("Google User Info:", { name, photo, email });

      // Optional: Save to backend
      fetch("http://localhost:3000//adduser", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ name, photo, email }),
      });
    }
  }, [googleUser]);

  return (
    <div className="mx-auto max-w-md p-4 my-20 rounded-md shadow sm:p-8 bg-base-100 text-base-content">
      <h2 className="mb-3 text-3xl font-semibold text-center">
        Register your account
      </h2>

      <div className="my-6 space-y-4">
        <button
          onClick={onGoogleSignIn}
          aria-label="Register with Google"
          className="flex items-center justify-center w-full p-4 space-x-4 btn border rounded-md border-neutral text-base-content"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-5 h-5 fill-current"
          >
            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z" />
          </svg>
          <p>Register with Google</p>
        </button>
      </div>

      <div className="flex items-center w-full my-4">
        <hr className="w-full border-base-300" />
        <p className="px-3 text-base-content/70">OR</p>
        <hr className="w-full border-base-300" />
      </div>

      <form onSubmit={handleEmailSignupFunc} className="space-y-8">
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm text-base-content">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="e.g., Taj Uddin"
              className="w-full px-3 py-2 border rounded-md border-base-300 bg-base-100 text-base-content"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="photourl"
              className="block text-sm text-base-content"
            >
              Photo URL
            </label>
            <input
              type="text"
              name="photourl"
              id="photourl"
              required
              placeholder="Photo URL"
              className="w-full px-3 py-2 border rounded-md border-base-300 bg-base-100 text-base-content"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm text-base-content">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="e.g., you@example.com"
              className="w-full px-3 py-2 border rounded-md border-base-300 bg-base-100 text-base-content"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <label htmlFor="password" className="text-sm text-base-content">
                Password
              </label>
              <button className="text-xs hover:underline text-base-content/70">
                Forgot password?
              </button>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              required
              placeholder="Password"
              className="w-full px-3 py-2 border rounded-md border-base-300 bg-base-100 text-base-content"
            />
            {error ? (
              <p className="text-sm text-red-600 font-medium mt-1">{error}</p>
            ) : (
              <p className="text-sm text-green-400 font-medium mt-1">
                {success}
              </p>
            )}
          </div>
        </div>

        <p className="text-sm text-center text-base-content/70">
          Already have an account?{" "}
          <Link to="/signin" className="link link-hover text-primary">
            Sign in here
          </Link>
        </p>

        <button
          type="submit"
          className="w-full px-8 py-3 font-semibold rounded-md btn bg-primary text-primary-content"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
