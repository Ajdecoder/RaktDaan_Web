// src/components/VideoGallery.jsx
import React from "react";

const VideoGallery = () => {
  const videos = [
    { title: "Blood Donation Camp", url: "https://www.youtube.com/embed/hzQOCsaQvK0?si=hXmuex5wUdXvH0om" },
    { title: "RaktDaan Overview", url: "https://www.youtube.com/embed/kOISEM6L4xk?si=3P_jH2WCyFKvqZsz" },
    { title: "How to Donate Blood", url: "https://www.youtube.com/embed/ACSxfmUG8MM?si=vwyqR0aYvw1IrS54" },
    { title: "Every Blood Donor is Hero", url: "https://www.youtube.com/embed/Af0gk_kiGac?si=LU0kyweRg6biGrRe" },
    { title: "Blood Donation Process", url: "https://www.youtube.com/embed/2tsd8HqgoXE?si=hN64UBWzohEChN8c" },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Video Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-2">{video.title}</h2>
            <iframe
              width="100%"
              height="200"
              src={video.url}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;
