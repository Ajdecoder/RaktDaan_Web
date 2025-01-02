// src/components/BloodAvailability.jsx
import React from "react";

const BloodAvailability = () => {
  const bloodStock = [
    { bloodType: "A+", units: 50 },
    { bloodType: "B+", units: 40 },
    { bloodType: "O+", units: 60 },
    { bloodType: "AB+", units: 20 },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        Blood Availability
      </h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Blood Type</th>
            <th className="border border-gray-300 px-4 py-2">Units Available</th>
          </tr>
        </thead>
        <tbody>
          {bloodStock.map((stock, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-2">
                {stock.bloodType}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {stock.units}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BloodAvailability;
