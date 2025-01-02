// src/components/BloodDonationCamps.jsx
import React from "react";

const BloodDonationCamps = () => {
  const camps = [
    {
      name: "City Blood Donation Camp",
      location: "Central Park, NY",
      date: "2024-12-31",
      contact: "123-456-7890",
    },
    {
      name: "National Blood Camp",
      location: "Los Angeles, CA",
      date: "2025-01-10",
      contact: "987-654-3210",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Blood Donation Camps</h1>
      <ul className="space-y-4">
        {camps.map((camp, index) => (
          <li
            key={index}
            className="p-4 border border-gray-300 rounded-lg shadow-lg"
          >
            <h2 className="text-lg font-semibold">{camp.name}</h2>
            <p>Location: {camp.location}</p>
            <p>Date: {camp.date}</p>
            <p>Contact: {camp.contact}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BloodDonationCamps;
