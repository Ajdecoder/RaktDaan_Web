// src/components/BloodBankDirectory.jsx
import React from "react";

const BloodBankDirectory = () => {
  const bloodBanks = [
    { name: "City Blood Bank", location: "New York", contact: "123-456-7890" },
    { name: "National Blood Center", location: "Los Angeles", contact: "987-654-3210" },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        Blood Bank Directory
      </h1>
      <ul className="space-y-4">
        {bloodBanks.map((bank, index) => (
          <li
            key={index}
            className="p-4 border border-gray-300 rounded-lg shadow-lg"
          >
            <h2 className="text-lg font-semibold">{bank.name}</h2>
            <p>Location: {bank.location}</p>
            <p>Contact: {bank.contact}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BloodBankDirectory;
