// src/components/AboutUs.jsx
import React from 'react';

const AboutUs = () => {
  return (
    <div className="p-16 space-y-8 ">
      {/* Title */}
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4">About Raktdaan</h2>
        <p className="text-xl text-gray-700">Raktdaan: A Centralized Blood Bank Management System</p>
      </div>

      {/* Description */}
      <div>
        <h1 className="text-lg text-black font-bold">
          Raktdaan was inaugurated on 7th April 2016 by Hon'ble Minister of Health and Family Welfare, Sh. J P Nadda.
        </h1>
        <p className="mt-4 text-lg text-gray-800">
          Raktdaan enforces Drug & Cosmetic Act, National blood policy standards and guidelines ensuring proper collection & donation, effective management, and monitoring the quality and quantity of the donated blood.
          Considering the national roll-out, Raktdaan has been developed with a modular and scalable approach with configurable rule-based architecture, allowing customization to easily incorporate specific requirements from nationwide stakeholders.
        </p>
      </div>

<div className="flex gap-40">
        {/* Objectives */}
        <div>
        <h3 className="text-2xl font-semibold text-blue-600">Objectives</h3>
        <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mt-4">
          <li>Safe and Adequate Blood Supplies</li>
          <li>Reduced Turnaround Time</li>
          <li>Preventing Wastage of Blood</li>
          <li>Restrict Professional Donors</li>
          <li>Networking of Blood Banks</li>
          <li>Donor Repository</li>
        </ul>
      </div>

      {/* Salient Features */}
      <div>
        <h3 className="text-2xl font-semibold text-blue-600">Salient Features</h3>
        <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mt-4">
          <li>Web Based Application</li>
          <li>Aadhar Linkage</li>
          <li>Decision Support</li>
          <li>Enforces Guidelines</li>
          <li>Dashboard</li>
          <li>Statutory Reports</li>
        </ul>
      </div>
</div>

      {/* Download Brochure Section */}
      <div className="mt-8 text-center">
        <a
          href="https://link-to-brochure.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-blue-600 py-2 px-6 rounded hover:bg-blue-700"
        >
          Download Brochure
        </a>
      </div>

      {/* Major Components */}
      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-blue-600">Major Components of Raktdaan</h3>
        <ul className="list-decimal list-inside space-y-2 text-lg text-gray-700 mt-4">
          <li>The biometric Donor Management System for identifying, tracking, and blocking donors based on health, donation history, etc.</li>
          <li>A centralized Blood Inventory Management System for tracking blood stock across numerous blood banks.</li>
          <li>Bio-Medical Waste Management System for proper disposal of discarded blood and other waste generated during the process.</li>
          <li>Generation of rare blood group donor registries and generation of regular repeat donors.</li>
          <li>Alert and Notification System for real-time updates and notifications.</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
