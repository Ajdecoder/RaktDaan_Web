import React from "react";
import './LoadingPage.css';

const LoadingPage = () => {
  return (
    <div className="relative w-full h-screen bg-red-300 overflow-hidden">
      {/* Blood Drop Animation Container */}
      <div className="absolute top-0 inset-0 flex justify-center items-start space-y-6">
        {/* Blood Drops Set 1 */}
        <div className="drop drop1"></div>
        <div className="drop drop1"></div>
        <div className="drop drop1"></div>
      </div>

      <div className="absolute top-1/3 inset-0 flex justify-center items-start space-y-6">
        {/* Blood Drops Set 2 */}
        <div className="drop drop2"></div>
        <div className="drop drop2"></div>
        <div className="drop drop2"></div>
      </div>

      <div className="absolute top-1/3 inset-0 flex justify-center items-start space-y-6">
        {/* Blood Drops Set 3 */}
        <div className="drop drop3"></div>
        <div className="drop drop3"></div>
        <div className="drop drop3"></div>
      </div>

      <div className="absolute top-2/3 inset-0 flex justify-center items-start space-y-6">
        {/* Blood Drops Set 4 */}
        <div className="drop drop4"></div>
        <div className="drop drop4"></div>
        <div className="drop drop4"></div>
      </div>

      {/* Loading Text */}
      <div className="absolute z-10 text-center w-full top-1/3">
        <h2 className="text-4xl font-semibold mb-4 text-black">
          Please Wait...
        </h2>
        <p className="text-xl text-black">
          We are connecting you to lifesaving blood resources.
        </p>
      </div>
    </div>
  );
};

export default LoadingPage;
