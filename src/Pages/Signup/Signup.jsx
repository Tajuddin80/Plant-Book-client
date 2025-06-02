import React from "react";
import { Link } from "react-router";

const Signup = () => {
  return (
    <div className="mx-auto max-w-md p-4 my-20 rounded-md shadow sm:p-8 bg-base-100 text-base-content">
    <h2 className="mb-3 text-3xl font-semibold text-center">Register your account</h2>

      <div className="my-6 space-y-4">
        <button
          aria-label="Register with Google"
          type="button"
          className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-neutral text-base-content"
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

      <form noValidate action="" className="space-y-8">
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
          className="w-full px-8 py-3 font-semibold rounded-md bg-primary text-primary-content"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
