import React, { useState } from 'react';

const CampAdminSignup = () => {
  const [adminDetails, setAdminDetails] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdminDetails({ ...adminDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Admin Registered:', adminDetails);

    // Add logic to send `adminDetails` to the backend
    alert('Registration successful!');
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mt-12">
      <h2 className="text-2xl font-semibold text-center mb-4">Camp Admin Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-medium mb-2">UserName</label>
          <input
            type="text"
            id="username"
            name="email"
            value={adminDetails.username}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={adminDetails.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-lg font-medium mb-2">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={adminDetails.password}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Enter a secure password"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-lg"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default CampAdminSignup;
