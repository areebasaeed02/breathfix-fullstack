import React, { useState } from "react";
import toast from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const users = localStorage.getItem("users");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear("users");
    toast.success("Logout Successfull");
    navigate("/");
  };

  return (
    <nav className="bg-gray-100 text-white sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center font-poppins">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={logo} alt="logo" width={"70%"} />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <NavLink
              to="/"
              className="text-stone-800 hover:underline px-2 py-2 rounded-md text-base font-medium"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="text-stone-800 hover:underline px-2 py-2 rounded-md text-base font-medium"
            >
              About Us
            </NavLink>
            {users ? (
              <NavLink
                to="/"
                className="text-stone-800 hover:underline px-2 py-2 rounded-md text-base font-medium"
                onClick={logout}
              >
                LogOut
              </NavLink>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className="text-stone-800 hover:underline px-2 py-2 rounded-md text-base font-medium"
                >
                  Login
                </NavLink>
                <NavLink
                  to="/register"
                  className="text-stone-800 hover:underline px-2 py-2 rounded-md text-base font-medium"
                >
                  Register
                </NavLink>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="/"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
            <a
              href="/blog"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Blog
            </a>
            <a
              href="/about"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              About Us
            </a>
            {users ? (
              <a
                href="/login"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                LogOut
              </a>
            ) : (
              <a
                href="/login"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Login
              </a>
            )}
            <a
              href="/register"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Register
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
