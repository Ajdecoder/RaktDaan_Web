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
    <div className="p-20 min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-green-500">
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-lg p-8 hover:scale-105 transition-transform duration-300">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
          Voluntary Donor Group
        </h1>
        <p className="text-lg text-center text-gray-600 mb-8">
          Register your group to contribute to life-saving blood donations.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Group Name */}
          <div>
            <label
              htmlFor="groupName"
              className="block text-sm font-medium text-gray-700"
            >
              Group Name
            </label>
            <input
              type="text"
              name="groupName"
              id="groupName"
              placeholder="Enter your group name"
              value={formData.groupName}
              onChange={handleChange}
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Contact Number */}
          <div>
            <label
              htmlFor="contact"
              className="block text-sm font-medium text-gray-700"
            >
              Contact Number
            </label>
            <input
              type="text"
              name="contact"
              id="contact"
              placeholder="Enter contact number"
              value={formData.contact}
              onChange={handleChange}
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Location */}
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700"
            >
              Location
            </label>
            <input
              type="text"
              name="location"
              id="location"
              placeholder="Enter your location"
              value={formData.location}
              onChange={handleChange}
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all"
          >
            Register Group
          </button>
        </form>
      </div>
    </div>
  );
};

export default VoluntaryDonorGroup;
