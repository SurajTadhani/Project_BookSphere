import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Login from "./Login";
import Logout from "./Logout";
import { useAuth } from "../context/AuthProviders";
import { ImSun } from "react-icons/im";
import { FaRegMoon } from "react-icons/fa";

function Navigation({ searchQuery, onSearchChange }) {
  const [authUser, setAuthUser] = useAuth();
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  useEffect(() => {
    const element = document.documentElement;
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const [sticky, setSticky] = useState(false);


  const handleScroll = () => {
    setSticky(window.scrollY > 0);
  };

  useEffect(() => {
    // Attach the event listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); 

    const handleLogout = async () => {
    try {
    
      setAuthUser(null);     
      localStorage.removeItem("authToken");
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const navItems = (
    <ul className="flex gap-10 md:flex-row flex-col">
      <li className="dark:text-white">
        <NavLink
          
          to="/"
          className={({ isActive }) =>
            isActive ? "dark:border-white border-b-2 border-black dark:text-white" : "text-gray-500"
          }
        >
          Home
        </NavLink>
      </li>
      <li className="dark:text-white">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "dark:border-white border-b-2 border-black dark:text-white" : "text-gray-500"
          }
        >
          About
        </NavLink>
      </li>
      <li className="dark:text-white">
        <NavLink
          to="/courses"
          className={({ isActive }) =>
            isActive ? "dark:border-white border-b-2 border-black dark:text-white" : "text-gray-500"
          }
        >
          Courses
        </NavLink>
      </li>
      <li className="dark:text-white">
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "dark:border-white border-b-2 border-black dark:text-white" : "text-gray-500"
          }
        >
          Contact
        </NavLink>
      </li>
    </ul>
  );

  return (
   <div className={`z-10 fixed top-0 left-0 right-0  border-b ${
    sticky
      ? "sticky-navbar shadow-md bg-base-200 dark:bg-slate-700 dark:text-white duration-500 transition-all ease-in-out "
      : ""
  }`}>
    <div
      className='container'>
      <div className="navbar">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <a className="md:text-xl font-bold cursor-pointer">ReadSphere</a>
        </div>
        <div className="navbar-end space-x-3">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItems}</ul>
          </div>
          <div className="hidden md:block ">
            <label className="input input-bordered  flex items-center gap-2">
              <input
                type="text"
                className="grow"
                placeholder="Search"
                value={searchQuery}
                onChange={onSearchChange}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-5 h-5 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
          <div>
      <label className="swap swap-rotate cursor-pointer">
        <input
          type="checkbox"
          className="theme-controller hidden"
          onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
          checked={theme === "dark"}
        />

        {/* Show Sun Icon in Dark Mode */}
        {theme === "dark" ? (
          <ImSun className="text-yellow-500 text-2xl" />
        ) : (
          <FaRegMoon className="text-gray-900 text-2xl" />
        )}
      </label>
    </div>
           <div className="navbar-end space-x-3">
      {/* other items */}
      {authUser ? (
        <button onClick={handleLogout} className="btn btn-outline btn-sm">
          Logout
        </button>
      ) : (
        <NavLink to="/login" className="btn btn-primary btn-sm">
          Login
        </NavLink>
      )}
    </div>
        </div>
      </div>
    </div>
   </div>
  );
}

export default Navigation;
