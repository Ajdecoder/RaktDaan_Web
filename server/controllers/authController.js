import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Donor from "../models/Donor.js";
import CampAdmin from "../models/CampAdmin.js";
import BloodBank from "../models/BloodBank.js";

// Login for Donor
export const donorLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const donor = await Donor.findOne({ email });

    if (!donor) {
      return res.status(400).json({ message: "Donor not found" });
    }

    const isMatch = await donor.matchPassword(password);

    console.log(password);
    console.log(donor.password);
    console.log(isMatch);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: donor._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Register for Donor

export const donorRegister = async (req, res) => {
  const { name, email, password } = req.body; // Added 'role' if needed

  try {
    // Check if donor already exists
    const existingDonor = await Donor.findOne({ email });
    if (existingDonor) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new donor with hashed password
    const newDonor = new Donor({
      name,
      email,
      password: hashedPassword,
    });

    // Save the donor to the database
    await newDonor.save();

    // Generate a JWT token for the donor
    const token = jwt.sign({ id: newDonor._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // Set JWT token in the cookie
    res.cookie("jwttoken", token, { httpOnly: true });

    // Respond with success message and token
    res.status(201).json({
      message: "Donor registered successfully",
      token,
    });
  } catch (err) {
    console.error("Registration error:", err);
    res
      .status(500)
      .json({ message: "Registration failed. Please try again later." });
  }
};

// Login for Camp Admin
export const campAdminLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const campAdmin = await CampAdmin.findOne({ email });

    if (!campAdmin) {
      return res.status(400).json({ message: "Camp Admin not found" });
    }

    const isMatch = await campAdmin.matchPassword(password);

    console.log(password);
    console.log(campAdmin.password);
    console.log(isMatch);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: campAdmin._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
    console.log(error)
  }
};

// Register for Camp Admin
export const campAdminRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const campAdminExists = await CampAdmin.findOne({ email });

    if (campAdminExists) {
      return res.status(400).json({ message: "Camp Admin already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const campAdmin = new CampAdmin({ name, email, password: hashedPassword });
    await campAdmin.save();

    res.status(201).json({ message: "Camp Admin registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Login for RaktDaan Admin
export const raktdaanLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await CampAdmin.findOne({ email });

    if (!admin) {
      return res.status(400).json({ message: "RaktDaan Admin not found" });
    }

    const isMatch = await admin.matchPassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Add a new Blood Bank
export const addBloodBank = async (req, res) => {
  try {
    const { name, address, contactNumber, email } = req.body;

    const bloodBank = new BloodBank({ name, address, contactNumber, email });
    await bloodBank.save();

    res.status(201).json(bloodBank);
  } catch (error) {
    res.status(500).json({ message: "Error adding blood bank", error });
  }
};

// Register for Blood Bank
export const bloodBankRegister = async (req, res) => {
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
