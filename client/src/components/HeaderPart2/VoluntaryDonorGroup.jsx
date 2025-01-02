// src/components/VoluntaryDonorGroup.jsx
import React, { useState } from "react";

const VoluntaryDonorGroup = () => {
  const [formData, setFormData] = useState({
    groupName: "",
    contact: "",
    location: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for joining as a Voluntary Donor Group!");
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Voluntary Donor Group</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="groupName"
          placeholder="Group Name"
          value={formData.groupName}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg"
          required
        />
        <input
          type="text"
          name="contact"
          placeholder="Contact Number"
          value={formData.contact}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg"
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded-lg"
        >
          Register Group
        </button>
      </form>
    </div>
  );
};

export default VoluntaryDonorGroup;
