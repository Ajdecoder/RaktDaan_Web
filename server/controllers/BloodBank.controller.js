import BloodBank from "../models/BloodBank.modal.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


// Register for Blood Bank
export const addBloodBank = async (req, res) => {
    try {
      const {
        name,
        email,
        password,
        address,
        contactNumber,
        parentHospital,
        shortName,
        category,
        contactPerson,
        firstRegistrationDate,
        licenceNo,
        fromDate,
        toDate,
        componentFacility,
        apheresisFacility,
        helplineNumber,
        address1,
        address2,
        pincode,
        latitude,
        longitude,
        website,
        noOfBeds,
        state,
        district,
        city,
      } = req.body;
  
      const bloodBankExists = await BloodBank.findOne({ email });
  
      if (bloodBankExists) {
        return res.status(400).json({ message: "Blood Bank already exists" });
      }
  
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      const bloodBank = new BloodBank({
        name,
        email,
        password: hashedPassword,
        address,
        contactNumber,
        parentHospital,
        shortName,
        category,
        contactPerson,
        firstRegistrationDate,
        licenceNo,
        fromDate,
        toDate,
        componentFacility,
        apheresisFacility,
        helplineNumber,
        address1,
        address2,
        pincode,
        latitude,
        longitude,
        website,
        noOfBeds,
        state,
        district,
        city,
      });
      await bloodBank.save();

      return res.status(201).json({ success: true, message: "Blood Bank registered successfully", data: bloodBank });
    } catch (error) {
      return res.status(500).json({ success: false, message: "Server error", data: null });
    }
  };