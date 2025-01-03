import React, { useState } from 'react';

const AddYourBloodbank = () => {
  const [formData, setFormData] = useState({
    bloodbankName: '',
    contactPerson: '',
    email: '',
    contactNumber: '',
    address1: '',
    pincode: '',
    latitude: '',
    longitude: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Bloodbank details submitted successfully');
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">Add Your Bloodbank</h2>
      <form onSubmit={handleSubmit}>
        {/* Blood Bank Details */}
        <fieldset className="mb-6">
          <legend className="text-lg font-bold text-blue-600 mb-4">Blood Bank Information</legend>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="bloodbankName" className="block mb-2">Blood Bank Name*</label>
              <input
                type="text"
                name="bloodbankName"
                id="bloodbankName"
                value={formData.bloodbankName}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div>
              <label htmlFor="contactPerson" className="block mb-2">Contact Person*</label>
              <input
                type="text"
                name="contactPerson"
                id="contactPerson"
                value={formData.contactPerson}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
          </div>
        </fieldset>

        {/* Contact Information */}
        <fieldset className="mb-6">
          <legend className="text-lg font-bold text-blue-600 mb-4">Contact Details</legend>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block mb-2">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label htmlFor="contactNumber" className="block mb-2">Contact Number*</label>
              <input
                type="tel"
                name="contactNumber"
                id="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
          </div>
        </fieldset>

        {/* Address Details */}
        <fieldset className="mb-6">
          <legend className="text-lg font-bold text-blue-600 mb-4">Postal Address</legend>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="address1" className="block mb-2">Address Line 1*</label>
              <input
                type="text"
                name="address1"
                id="address1"
                value={formData.address1}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div>
              <label htmlFor="pincode" className="block mb-2">Pincode*</label>
              <input
                type="text"
                name="pincode"
                id="pincode"
                value={formData.pincode}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
          </div>
        </fieldset>

        {/* Google Map */}
        <fieldset className="mb-6">
          <legend className="text-lg font-bold text-blue-600 mb-4">Location on Map</legend>
          <div className="w-full">
            <iframe
              src={`https://www.google.com/maps?q=${formData.latitude},${formData.longitude}&output=embed`}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </fieldset>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddYourBloodbank;
