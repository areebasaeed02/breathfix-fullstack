// src/components/Login.jsx
import React, { useState } from "react";
import toast from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setuser] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost/breathfix/backend/api/login.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user),
        }
      );
      const data = await response.json();
      if (data.status === "success") {
        toast.success(data.message);
        localStorage.setItem('users', JSON.stringify(data.user));
        navigate("/");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-white border rounded-lg shadow-lg p-8 w-full max-w-md font-poppins">
        <h1 className="text-2xl font-bold text-center text-indigo-600 mb-4">
          Welcome to BreathFix
        </h1>
        <p className="text-center text-gray-500 mb-6">
          We’re glad to have you back! Please log in to continue.
        </p>

        <form onSubmit={handlesubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 font-semibold mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your username"
              required
              name="username"
              value={user.username}
              onChange={(e) => setuser({ ...user, username: e.target.value })}
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-semibold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your password"
              required
              name="password"
              value={user.password}
              onChange={(e) => setuser({ ...user, password: e.target.value })}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md text-lg font-medium hover:bg-indigo-700 transition duration-300"
          >
            Login
          </button>
        </form>
        {/* Register page */}
        <p className="text-center text-gray-600 mt-4">
          Don't have an account?{" "}
          <NavLink
            to="/register"
            className="text-indigo-600 font-medium hover:underline"
          >
            Register
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
