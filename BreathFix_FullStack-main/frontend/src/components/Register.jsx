import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Register = () => {
  const [newuser, setnewuser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost/breathfix/backend/api/signup.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newuser),
        }
      );
      const data = await response.json();
      if (data.status === "success") {
        toast.success(data.message);
        setnewuser({ username: "", email: "", password: "" });
        navigate('/login');
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast("Error Occured", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 border rounded-lg shadow-lg w-full max-w-md font-poppins">
        {/* Website Name */}
        <h1 className="text-2xl font-bold text-indigo-600 text-center mb-4">
          BreathFix
        </h1>
        {/* Warming Line */}
        <p className="text-center text-gray-600 mb-6">
          Create an account to join our amazing community!
        </p>
        {/* Form */}
        <form onSubmit={handlesubmit}>
          {/* Username */}
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
              value={newuser.username}
              onChange={(e) =>
                setnewuser({ ...newuser, username: e.target.value })
              }
            />
          </div>
          {/* email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your email address"
              required
              name="email"
              value={newuser.email}
              onChange={(e) =>
                setnewuser({ ...newuser, email: e.target.value })
              }
            />
          </div>
          {/* Password */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-semibold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="confirm-password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your password"
              required
              name="password"
              value={newuser.password}
              onChange={(e) =>
                setnewuser({ ...newuser, password: e.target.value })
              }
            />
          </div>
          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md text-lg font-medium hover:bg-indigo-700 transition duration-300"
          >
            Sign Up
          </button>
        </form>
        {/* Login Link */}
        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <NavLink
            to="/login"
            className="text-indigo-600 font-medium hover:underline"
          >
            Login
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Register;
