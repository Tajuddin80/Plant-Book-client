import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../AllContexts/AuthContext/AuthContext";
import Swal from "sweetalert2";

const Signin = () => {
  const {
    handleGoogleSignIn,
    handleEmailSignin,
    setUser,
    setPhoto,
    setUsername,
    setEmail,
  } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleEmailSigninFunc = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const loginDetails = Object.fromEntries(formData.entries());

    handleEmailSignin(loginDetails.email, loginDetails.password)
      .then((result) => {
        const user = result.user;
        if (user) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Signin Successful",
            showConfirmButton: false,
            timer: 1500,
          });

          setSuccess("Signin successful");
          setError("");

          setUser(user);
          setUsername(user?.displayName);
          setPhoto(user?.photoURL);
          setEmail(user?.email);

          navigate(from, { replace: true });
        }
      })
      .catch((error) => {
        setError(error.message);
        setSuccess("");
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Wrong Email or Password",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  const handleGoogleClick = async () => {
    try {
      const result = await handleGoogleSignIn();
      const user = result.user;

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
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Google Sign-in Successful",
              showConfirmButton: false,
              timer: 1500,
            });
            setUser(user);
            setSuccess("Google Sign-in Successful");
            navigate(from, { replace: true });
          }
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

  return (
    <div className="mx-auto max-w-md p-4 my-20 rounded-md shadow sm:p-8 bg-base-100 text-base-content">
      <h2 className="mb-3 text-3xl font-semibold text-center">
        Login to your account
      </h2>

      <div className="my-6 space-y-4">
        <button
          aria-label="Login with Google"
          onClick={handleGoogleClick}
          type="button"
          className="flex items-center justify-center w-full btn cursor-pointer p-4 space-x-4 border rounded-md border-base-content/20 hover:border-base-content focus:ring-2 focus:ring-offset-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-5 h-5 fill-current"
          >
            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
          </svg>
          <p>Login with Google</p>
        </button>
      </div>

      <div className="flex items-center w-full my-4">
        <hr className="w-full border-base-content/20" />
        <p className="px-3 text-base-content/70">OR</p>
        <hr className="w-full border-base-content/20" />
      </div>

      <form onSubmit={handleEmailSigninFunc} action="" className="space-y-8">
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="cmtajuddinchowdhury@gmail.com"
              className="w-full px-3 py-2 border rounded-md border-base-content/20 bg-base-100 text-base-content"
            />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-xs hover:underline text-base-content/70"
              >
                Forgot password?
              </a>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              required
              placeholder="password"
              className="w-full px-3 py-2 border rounded-md border-base-content/20 bg-base-100 text-base-content"
            />
            {error ? (
              <p className="text-sm text-red-600 font-medium mt-1">{error}</p>
            ) : (
              <p className="text-sm text-green-300 font-medium mt-1">
                {success}
              </p>
            )}
          </div>
        </div>

        <p className="text-sm text-center text-base-content/70">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            state={{ from: location.state?.from }}
            className="link link-hover text-primary"
          >
            Sign up here
          </Link>
        </p>

        <button
          type="submit"
          className="w-full px-8 py-3 font-semibold btn cursor-pointer rounded-md bg-primary text-primary-content"
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Signin;
