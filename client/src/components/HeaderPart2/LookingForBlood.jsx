import React, { useState } from "react";

const LookingForBlood = () => {
  const [formData, setFormData] = useState({
    bloodType: "",
    location: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Searching for blood availability...");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-400 to-pink-500">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
          Looking for Blood
        </h1>
        <p className="text-lg text-center text-gray-700 mb-8">
          Find the nearest blood donors or blood banks to save lives.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Blood Type Selection */}
          <div>
            <label
              htmlFor="bloodType"
              className="block text-sm font-medium text-gray-700"
            >
              Select Blood Type
            </label>
            <select
              name="bloodType"
              id="bloodType"
              value={formData.bloodType}
              onChange={handleChange}
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
              required
            >
              <option value="">Select Blood Type</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
          </div>

          {/* Location Input */}
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700"
            >
              Enter Location
            </label>
            <input
              type="text"
              name="location"
              id="location"
              placeholder="Enter your city or area"
              value={formData.location}
              onChange={handleChange}
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 px-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-all"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default LookingForBlood;
