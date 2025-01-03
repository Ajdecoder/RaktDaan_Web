import React, { useState } from "react";

const ThalassemiaRequest = () => {
  const [formData, setFormData] = useState({
    patientName: "",
    bloodType: "",
    hospital: "",
    contact: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thalassemia blood request submitted!");
  };

  return (
    <div className="p-20 min-h-screen flex items-center justify-center bg-gradient-to-r from-red-400 to-pink-500">
      <div className=" max-w-3xl w-full bg-white rounded-lg shadow-lg ">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
          Thalassemia Blood Request
        </h1>
        <p className="text-lg text-center text-gray-700 mb-8">
          Submit your request for Thalassemia blood transfusion needs. Your
          request will help us find suitable donors quickly.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Patient Name */}
          <div>
            <label
              htmlFor="patientName"
              className="block text-sm font-medium text-gray-700"
            >
              Patient Name
            </label>
            <input
              type="text"
              name="patientName"
              id="patientName"
              placeholder="Enter patient name"
              value={formData.patientName}
              onChange={handleChange}
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
              required
            />
          </div>

          {/* Blood Type */}
          <div>
            <label
              htmlFor="bloodType"
              className="block text-sm font-medium text-gray-700"
            >
              Blood Type
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

          {/* Hospital Name */}
          <div>
            <label
              htmlFor="hospital"
              className="block text-sm font-medium text-gray-700"
            >
              Hospital Name
            </label>
            <input
              type="text"
              name="hospital"
              id="hospital"
              placeholder="Enter hospital name"
              value={formData.hospital}
              onChange={handleChange}
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
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
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 px-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-all"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default ThalassemiaRequest;
