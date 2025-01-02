// src/components/MobileApps.jsx
import React from "react";

const MobileApps = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Mobile Apps</h1>
      <p className="text-center mb-6">
        Download the RaktDaan mobile app to access blood donation features
        anytime, anywhere!
      </p>
      <div className="flex justify-center gap-6">
        <a href="/play-store-link" target="_blank" rel="noopener noreferrer">
          <img src="/img/playstore.png" alt="Google Play" className="w-40" />
        </a>
        <a href="/app-store-link" target="_blank" rel="noopener noreferrer">
          <img src="/img/appstore.png" alt="App Store" className="w-40" />
        </a>
      </div>
    </div>
  );
};

export default MobileApps;
