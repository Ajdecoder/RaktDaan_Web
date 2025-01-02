// src/components/LookingForBlood.jsx
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
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Looking for Blood</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <select
          name="bloodType"
          value={formData.bloodType}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg"
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
        <input
          type="text"
          name="location"
          placeholder="Enter Location"
          value={formData.location}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded-lg"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default LookingForBlood;
