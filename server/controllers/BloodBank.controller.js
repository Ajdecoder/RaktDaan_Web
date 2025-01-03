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
  
      res.status(201).json({ message: "Blood Bank registered successfully" });
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
  };