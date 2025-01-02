import React, { useState } from 'react';
import './Gallery.css'; // Import the CSS file for styling

const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "img/bld_donation1.jpg",
    "img/bld_donation2.jpg",
    "img/bld_donation3.jpg",
    "img/bld_donation4.jpg",
    "img/bld_donation5.jpg",
    "img/bld_donation6.jpg",
  ];

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="gallery">
      <h2>Image Gallery</h2>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item" onClick={() => openModal(image)}>
            <img src={image} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Modal for viewing selected image */}
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <img src={selectedImage} alt="Selected" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
