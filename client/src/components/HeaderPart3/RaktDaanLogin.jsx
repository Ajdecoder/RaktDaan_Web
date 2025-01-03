// src/components/RaktDaanLogin.jsx
import React, { useState } from "react";
import axios from "axios";

const RaktDaanLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Reset error state

    try {
      const response = await axios.post("/api/auth/login", { email, password });
      console.log("Login successful", response.data);
      alert("Logged in successfully");
      // Redirect or save token logic here
    } catch (err) {
      console.error("Login error:", err.response?.data || err.message);
      setError(err.response?.data?.message || "Login failed. Please try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mt-12">
      <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">
        RaktDaan Login
      </h2>
      <form onSubmit={handleLogin}>
        {error && (
          <div className="bg-red-100 text-red-700 p-2 mb-4 rounded">
            {error}
          </div>
        )}
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-lg font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Login
        </button>
        <div className="text-center mt-4">
          <a
            href="/forgot-password"
            className="text-sm text-blue-600 hover:underline"
          >
            Forgot Password?
          </a>
        </div>
        <div className="text-center mt-2">
          <span className="text-sm">
            Don’t have an account?{" "}
            <a href="/signup" className="text-blue-600 hover:underline">
              Register as a Donor
            </a>
          </span>
        </div>
      </form>
    </div>
  );
};

export default RaktDaanLogin;
