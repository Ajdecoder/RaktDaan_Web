// src/components/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import thankyoublooddoner from "/img/thankublooddonors.png";
import DonationTypes from "./HeaderPart1/DonationTypes";
import CountUp from "react-countup";

const Home = () => {
  return (
    <>
      <div className="text-center p-6">
        <img
          src={thankyoublooddoner}
          alt="thankyoublooddoner"
          className="mx-auto mb-6"
        />
        <h2 className="text-2xl font-semibold mb-4">Welcome to RaktDaan!</h2>
        <p className="mb-6">
          Join us in saving lives by donating or finding blood.
        </p>
        <Link to="/about" className="bg-blue-600 text-white py-2 px-4 rounded">
          Learn More About Us
        </Link>

        {/* Cards Section */}
        <div className="flex flex-col lg:grid-cols-2 gap-6 mt-12">
          {/* First row with 2 cards */}
          <div className="flex gap-6">
            {/* Sky Blue Card */}
            <div className="bg-sky-400 text-white p-6 rounded-lg shadow-lg flex-1">
              <h3 className="text-xl font-semibold mb-2">Donors Registered</h3>
              <p className="text-lg">
                <CountUp start={0} end={6429093} duration={3} separator="," />
              </p>
            </div>

            {/* Blue Card */}
            <div className="bg-blue-600 text-white p-6 rounded-lg shadow-lg flex-1">
              <h3 className="text-xl font-semibold mb-2">
                Blood Units Collected
              </h3>
              <p className="text-lg">
                {" "}
                <CountUp start={0} end={6618783} duration={3} separator="," />
              </p>
            </div>
          </div>

          {/* Second row with the remaining cards */}
          <div className="flex flex-wrap gap-6 justify-center">
            {/* Red Card */}
            <div className="bg-red-600 text-white p-6 rounded-lg shadow-lg flex-1 min-w-[220px]">
              <h3 className="text-xl font-semibold mb-2">Blood Availability</h3>
              <Link to="/blood-availability" className="text-lg underline">
                Search Availability
              </Link>
            </div>

            {/* Sky Blue Card */}
            <div className="bg-sky-400 text-white p-6 rounded-lg shadow-lg flex-1 min-w-[220px]">
              <h3 className="text-xl font-semibold mb-2">
                Blood Bank Directory
              </h3>
              <Link to="/blood-bank-directory" className="text-lg underline">
                View Directory
              </Link>
            </div>

            {/* Yellow Card */}
            <div className="bg-yellow-400 text-black p-6 rounded-lg shadow-lg flex-1 min-w-[220px]">
              <h3 className="text-xl font-semibold mb-2">
                Blood Donation Camps
              </h3>
              <Link to="/blood-donation-camps" className="text-lg underline">
                Find Camps
              </Link>
            </div>

            {/* Red Card */}
            <div className="bg-red-600 text-white p-6 rounded-lg shadow-lg flex-1 min-w-[220px]">
              <h3 className="text-xl font-semibold mb-2">Donor Login</h3>
              <Link to="/donor-login" className="text-lg underline">
                Login Here
              </Link>
            </div>

            {/* Green Card */}
            <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg flex-1 min-w-[220px]">
              <h3 className="text-xl font-semibold mb-2">
                Register Voluntary Blood Camp
              </h3>
              <Link
                to="/register-voluntary-blood-camp"
                className="text-lg underline"
              >
                Register a Camp
              </Link>
            </div>
          </div>
        </div>
      </div>

      <DonationTypes />
    </>
  );
};

export default Home;
