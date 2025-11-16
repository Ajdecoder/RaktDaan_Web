import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { PORT_CLIENT } from "../../commonClient";

const CampAdminLogin = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${PORT_CLIENT}/api/auth/camp-admin-login`,
        credentials
      );
      alert("Login successful!");
      console.log(response.data);
      // Redirect to dashboard
      window.location.href = "/dashboard";
    } catch (error) {
      console.log(error?.response?.data.message)
      alert(error?.response?.data.message);
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-500">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
          Camp Admin Login
        </h1>
        <p className="text-lg text-center text-gray-600 mb-8">
          Welcome back! Please login to manage your blood donation camp.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={credentials.email}
              onChange={handleChange}
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              value={credentials.password}
              onChange={handleChange}
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-all"
          >
            Login
          </button>
          <div className="text-center mt-4 flex justify-center gap-10">
            <a
              href="/forgot-password"
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot Password?
            </a>
            <Link
              to="/camp-admin-register"
              className="text-sm text-blue-600 hover:underline"
            >
              No account? Register as a Camp Admin
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CampAdminLogin;
