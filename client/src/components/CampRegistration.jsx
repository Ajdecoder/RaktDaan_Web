import React, { useState } from "react";
import './CampRegistration.css'

const CampRegistration = () => {
  const [formData, setFormData] = useState({
    organizationType: "",
    organizationName: "",
    organizerName: "",
    organizerMobile: "",
    organizerEmail: "",
    coOrganizerName: "",
    coOrganizerMobile: "",
    campName: "",
    campAddress: "",
    state: "",
    district: "",
    cityName: "",
    bloodBank: "",
    campProposeDate: "",
    startTime: "",
    endTime: "",
    latitude: "",
    longitude: "",
    estimatedParticipants: "",
    reference: "",
    remarks: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
    // Add API call to submit form data
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
      <h2>Camp Registration</h2>
      <form onSubmit={handleSubmit}>
        {/* Organization Type */}
        <label>
          Organization Type: *
          <select name="organizationType" value={formData.organizationType} onChange={handleChange} required>
            <option value="">Select value</option>
            <option value="NGO">NGO</option>
            <option value="Corporate">Corporate</option>
            <option value="School/College">School/College</option>
          </select>
        </label>

        {/* Organization Name */}
        <label>
          Organization Name: *
          <input
            type="text"
            name="organizationName"
            value={formData.organizationName}
            onChange={handleChange}
            required
          />
        </label>

        {/* Organizer Details */}
        <label>
          Organizer Name: *
          <input
            type="text"
            name="organizerName"
            value={formData.organizerName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Organizer Mobile No: *
          <input
            type="tel"
            name="organizerMobile"
            value={formData.organizerMobile}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Organizer Email Id: *
          <input
            type="email"
            name="organizerEmail"
            value={formData.organizerEmail}
            onChange={handleChange}
            required
          />
        </label>

        {/* Co-Organizer Details */}
        <label>
          Co-Organizer Name:
          <input
            type="text"
            name="coOrganizerName"
            value={formData.coOrganizerName}
            onChange={handleChange}
          />
        </label>
        <label>
          Co-Organizer Mobile:
          <input
            type="tel"
            name="coOrganizerMobile"
            value={formData.coOrganizerMobile}
            onChange={handleChange}
          />
        </label>

        {/* Camp Details */}
        <label>
          Camp Name:
          <input
            type="text"
            name="campName"
            value={formData.campName}
            onChange={handleChange}
          />
        </label>
        <label>
          Camp Address: *
          <input
            type="text"
            name="campAddress"
            value={formData.campAddress}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          State: *
          <select name="state" value={formData.state} onChange={handleChange} required>
            <option value="">Select State</option>
            <option value="State1">State1</option>
            <option value="State2">State2</option>
          </select>
        </label>
        <label>
          District: *
          <select name="district" value={formData.district} onChange={handleChange} required>
            <option value="">Select District</option>
            <option value="District1">District1</option>
            <option value="District2">District2</option>
          </select>
        </label>
        <label>
          City Name: *
          <input
            type="text"
            name="cityName"
            value={formData.cityName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          BloodBank: *
          <select name="bloodBank" value={formData.bloodBank} onChange={handleChange} required>
            <option value="">Select BloodBank</option>
            <option value="BloodBank1">BloodBank1</option>
            <option value="BloodBank2">BloodBank2</option>
          </select>
        </label>

        {/* Date and Time */}
        <label>
          Camp Propose Date: *
          <input
            type="date"
            name="campProposeDate"
            value={formData.campProposeDate}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Start Time (24HH:MM): *
          <input
            type="time"
            name="startTime"
            value={formData.startTime}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          End Time (24HH:MM): *
          <input
            type="time"
            name="endTime"
            value={formData.endTime}
            onChange={handleChange}
            required
          />
        </label>

        {/* Location */}
        <label>
          Latitude:
          <input
            type="text"
            name="latitude"
            value={formData.latitude}
            onChange={handleChange}
          />
        </label>
        <label>
          Longitude:
          <input
            type="text"
            name="longitude"
            value={formData.longitude}
            onChange={handleChange}
          />
        </label>

        {/* Additional Details */}
        <label>
          Estimated Participants: *
          <input
            type="number"
            name="estimatedParticipants"
            value={formData.estimatedParticipants}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Reference/Camp Supporter (Prayojak):
          <input
            type="text"
            name="reference"
            value={formData.reference}
            onChange={handleChange}
          />
        </label>
        <label>
          Remarks:
          <textarea
            name="remarks"
            value={formData.remarks}
            onChange={handleChange}
          ></textarea>
        </label>

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CampRegistration;
