import React from "react";

const MobileApps = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-400 to-pink-500">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
          Mobile Apps
        </h1>
        <p className="text-lg text-center text-gray-700 mb-8">
          Download the <span className="font-bold text-red-600">RaktDaan</span> mobile app to access blood donation features anytime, anywhere!
        </p>
        <div className="flex justify-center gap-8">
          {/* Google Play Link */}
          <a
            href="https://play.google.com/store/apps/details?id=com.example.raktdaan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-105 transition-transform duration-300"
          >
            <img
              src="https://bbs.oppo.com/upload/image/20210604/115859906/816990030399799297.jpg"
              alt="Google Play"
              className="block w-48 rounded-lg shadow-md"
            />
          </a>

          {/* App Store Link */}
          <a
            href="https://apps.apple.com/us/app/example-raktdaan/id123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-105 transition-transform duration-300"
          >
            <img
              src="https://purepng.com/public/uploads/large/purepng.com-appstore-iconsymbolsiconsapple-iosiosios-8-iconsios-8-721522596009rinhz.png"
              alt="App Store"
              className="w-48 rounded-lg shadow-md"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileApps;
