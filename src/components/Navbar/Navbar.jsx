import React, { useContext, useEffect, useState } from "react";
import { NavLink, Link } from "react-router";
import icon from "../../assets/extra-section/plant.png";
import { Tooltip } from "react-tooltip";
import { AuthContext } from "../../AllContexts/AuthContext/AuthContext";

const Navbar = () => {
  const { user, handleLogout } = useContext(AuthContext);

  const [theme, setTheme] = useState("luxury");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "luxury";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = (e) => {
    const newTheme = e.target.checked ? "luxury" : "cupcake";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "underline font-bold" : "")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/exploregardeners"
          className={({ isActive }) => (isActive ? "underline font-bold" : "")}
        >
          Explore Gardeners
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/browsetips"
          className={({ isActive }) => (isActive ? "underline font-bold" : "")}
        >
          Browse Tips
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/sharetip"
          className={({ isActive }) => (isActive ? "underline font-bold" : "")}
        >
          Share a Garden Tip
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`/mytips/${user?.email}`}
          className={({ isActive }) => (isActive ? "underline font-bold" : "")}
        >
          My Tips
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/aboutus"
          className={({ isActive }) => (isActive ? "underline font-bold" : "")}
        >
          About Us
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="items-center font-semibold md:text-2xl lg:text-3xl hidden md:flex">
          Plant
          <span>
            <img src={icon} alt="" />
          </span>
          Book
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end">
        {/* Theme Toggle */}
        <label className="swap swap-rotate">
          <input
            type="checkbox"
            onChange={toggleTheme}
            checked={theme === "luxury"}
          />

          {/* sun icon */}
          <svg
            className="swap-off h-7 w-7 fill-current mx-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-on h-7 w-7 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>

        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
              data-tooltip-id="userTooltip"
              data-tooltip-content={user.username || user.email || "User"}
            >
              <div className="w-10 rounded-full">
                <img
                  src={user.photoURL}
                  alt={user.username || "User profile"}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                  }}
                />
              </div>
            </div>

            <Tooltip id="userTooltip" place="bottom" effect="solid" />

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link
                  onClick={handleLogout}
                  to="/signin"
                  className="btn w-full"
                >
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <div className="flex gap-4">
            <Link to="/signin" className="btn btn-outline btn-primary">
              Sign In
            </Link>
            <Link to="/signup" className="btn btn-primary">
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
