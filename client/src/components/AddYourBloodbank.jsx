import React, { useState } from 'react';

const AddYourBloodbank = () => {
  const [formData, setFormData] = useState({
    bloodbankName: '',
    parentHospital: '',
    shortName: '',
    category: '',
    contactPerson: '',
    email: '',
    contactNumber: '',
    firstRegistrationDate: '',
    licenceNo: '',
    fromDate: '',
    toDate: '',
    componentFacility: '',
    apheresisFacility: '',
    helplineNumber: '',
    address1: '',
    address2: '',
    pincode: '',
    latitude: '',
    longitude: '',
    website: '',
    noOfBeds: '',
    state: '',
    district: '',
    city: '',
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
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-6">Add Your Bloodbank</h2>
      <form onSubmit={handleSubmit}>
        {/* Blood Bank Details */}
        <fieldset className="mb-6">
          <legend className="text-lg font-bold mb-4">Blood Bank Details</legend>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="bloodbankName" className="block mb-2">Blood Bank Name*</label>
              <input
                type="text"
                name="bloodbankName"
                id="bloodbankName"
                value={formData.bloodbankName}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label htmlFor="parentHospital" className="block mb-2">Parent Hospital Name</label>
              <input
                type="text"
                name="parentHospital"
                id="parentHospital"
                value={formData.parentHospital}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            {/* Add more fields similarly */}
          </div>
        </fieldset>

        {/* Contact Information */}
        <fieldset className="mb-6">
          <legend className="text-lg font-bold mb-4">Contact Information</legend>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contactPerson" className="block mb-2">Contact Person*</label>
              <input
                type="text"
                name="contactPerson"
                id="contactPerson"
                value={formData.contactPerson}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            {/* Add more fields similarly */}
          </div>
        </fieldset>

        {/* Address Details */}
        <fieldset className="mb-6">
          <legend className="text-lg font-bold mb-4">Postal Address</legend>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="address1" className="block mb-2">Address1*</label>
              <input
                type="text"
                name="address1"
                id="address1"
                value={formData.address1}
                onChange={handleChange}
                className="w-full p-2 border rounded"
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
                className="w-full p-2 border rounded"
                required
              />
            </div>
            {/* Add more fields similarly */}
          </div>
        </fieldset>

        {/* Submit Button */}
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddYourBloodbank;
