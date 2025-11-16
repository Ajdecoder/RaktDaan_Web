import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PORT_CLIENT } from "../../commonClient";

const DonorLogin = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await axios.post(
        `${PORT_CLIENT}/api/auth/donor-login`,
        credentials
      );
      setSuccess("Login successful! Redirecting...");
      console.log("credentials", credentials);
      console.log("response", response);

      // Redirect after login (example: to dashboard)
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 2000);
    } catch (error) {
      setError(
        error.response?.data?.message || "Something went wrong. Please try again."
      );
      console.error("Login Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-xl mt-12">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
        Donor Login
      </h1>
      {error && (
        <div className="bg-red-100 text-red-700 p-4 rounded mb-4">{error}</div>
      )}
      {success && (
        <div className="bg-green-100 text-green-700 p-4 rounded mb-4">
          {success}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={credentials.email}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 ${
            loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
          } text-white font-semibold rounded-lg transition duration-300`}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
        <div className="text-center mt-4 flex justify-center gap-10">
          <a
            href="/forgot-password"
            className="text-sm text-blue-600 hover:underline"
          >
            Forgot Password?
          </a>
          <Link
            to="/donor-register"
            className="text-sm text-blue-600 hover:underline"
          >
            No account? Register as a Donor
          </Link>
        </div>
      </form>
    </div>
  );
};

export default DonorLogin;
