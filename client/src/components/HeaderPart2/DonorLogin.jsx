// src/components/DonorLogin.jsx
import axios from "axios";
import React, { useState } from "react";
import { PORT_CLIENT } from "../../commonClient";

const DonorLogin = () => {
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
        `${PORT_CLIENT}/api/auth/donor-login`,
        credentials
      );
      console.log("credentials",credentials)
      console.log("response",response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-xl mt-12">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
        Donor Login
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <input
            type="email"
            name="email"
            placeholder="email"
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
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
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
      </form>
    </div>
  );
};

export default DonorLogin;
