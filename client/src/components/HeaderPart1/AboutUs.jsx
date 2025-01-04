// src/components/AboutUs.jsx
import React from 'react';
import { majorComponents, objectives, salientFeatures } from '../data/data';

const AboutUs = () => {
  return (
    <div className="p-4 sm:p-8 md:p-16 space-y-8">
      {/* Title */}
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-4">About Raktdaan</h2>
        <p className="text-lg sm:text-xl text-gray-700">Raktdaan: A Centralized Blood Bank Management System</p>
      </div>

      {/* Description */}
      <div>
        <h1 className="text-base sm:text-lg text-black font-bold">
          Raktdaan was inaugurated on 7th April 2016 by Hon'ble Minister of Health and Family Welfare, Sh. J P Nadda.
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-800">
          Raktdaan enforces Drug & Cosmetic Act, National blood policy standards and guidelines ensuring proper collection & donation, effective management, and monitoring the quality and quantity of the donated blood.
          Considering the national roll-out, Raktdaan has been developed with a modular and scalable approach with configurable rule-based architecture, allowing customization to easily incorporate specific requirements from nationwide stakeholders.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 md:gap-40">
        {/* Objectives */}
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold text-blue-600">Objectives</h3>
          <ul className="list-disc list-inside space-y-2 text-base sm:text-lg text-gray-700 mt-4">
            {objectives.map((objective, index) => (
              <li key={index} className="text-gray-700">{objective}</li>
            ))}
          </ul>
        </div>

        {/* Salient Features */}
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold text-blue-600">Salient Features</h3>
          <ul className="list-disc list-inside space-y-2 text-base sm:text-lg text-gray-700 mt-4">
            {salientFeatures.map((feature, index) => (
              <li key={index} className="text-gray-700">{feature}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Download Brochure Section */}
      <div className="mt-8 text-center">
        <a
          href="https://link-to-brochure.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-blue-600 py-2 px-4 sm:px-6 rounded hover:bg-blue-700"
        >
          Download Brochure
        </a>
      </div>

      {/* Major Components */}
      <div className="mt-8">
        <h3 className="text-xl sm:text-2xl font-semibold text-blue-600">Major Components of Raktdaan</h3>
        <ul className="list-decimal list-inside space-y-2 text-base sm:text-lg text-gray-700 mt-4">
          {majorComponents.map((component, index) => (
            <li key={index} className="text-gray-700">{component}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
