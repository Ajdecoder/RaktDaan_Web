import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Donor from "../models/Donor.modal.js";
import CampAdmin from "../models/CampAdmin.modal.js";
import BloodBank from "../models/BloodBank.modal.js";

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

    const token = jwt.sign({ id: donor._id, role: 'donor' }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    return res.json({ success: true, message: 'Login successful', data: { token } });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", data: null });
  }
};

// Register for Donor

export const donorRegister = async (req, res) => {
  const { name, email, password } = req.body; // Added 'role' if needed

  try {
    // Check if donor already exists
    const existingDonor = await Donor.findOne({ email });
    if (existingDonor) {
      return res.status(400).json({ success: false, message: "Email already registered", data: null });
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
    const token = jwt.sign({ id: newDonor._id, role: 'donor' }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // Set JWT token in the cookie
    res.cookie("jwttoken", token, { httpOnly: true });

    // Respond with success message and token
    return res.status(201).json({
      success: true,
      message: "Donor registered successfully",
      data: { token, user: { id: newDonor._id, name: newDonor.name, email: newDonor.email } },
    });
  } catch (err) {
    console.error("Registration error:", err);
    return res.status(500).json({ success: false, message: "Registration failed. Please try again later.", data: null });
  }
};

// Login for Camp Admin
export const campAdminLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const campAdmin = await CampAdmin.findOne({ email });

    if (!campAdmin) {
      return res.status(400).json({ success: false, message: "Camp Admin not found", data: null });
    }

    const isMatch = await campAdmin.matchPassword(password);

    if (!isMatch) {
      return res.status(400).json({ success: false, message: "Invalid credentials", data: null });
    }

    const token = jwt.sign({ id: campAdmin._id, role: 'campadmin' }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    return res.json({ success: true, message: 'Login successful', data: { token } });
  } catch (error) {
    console.log(error)
    return res.status(500).json({ success: false, message: "Server error", data: null });
  }
};

// Register for Camp Admin
export const campAdminRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const campAdminExists = await CampAdmin.findOne({ email });

    if (campAdminExists) {
      return res.status(400).json({ success: false, message: "Camp Admin already exists", data: null });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const campAdmin = new CampAdmin({ name, email, password: hashedPassword });
    await campAdmin.save();

    return res.status(201).json({ success: true, message: "Camp Admin registered successfully", data: { id: campAdmin._id, name: campAdmin.name, email: campAdmin.email } });
  } catch (error) {
    console.error("Error in campAdminRegister:", error); // Log the exact error
    return res.status(500).json({ success: false, message: "Server error", data: null });
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

    const token = jwt.sign({ id: admin._id, role: 'raktdaan' }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    return res.json({ success: true, message: 'Login successful', data: { token } });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server error", data: null });
  }
};

export const raktdaanRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // basic validation
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Name, email and password are required" });
    }

    // check if admin already exists
    const existingAdmin = await CampAdmin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ message: "RaktDaan admin already exists" });
    }

    // hash password and create admin with elevated role
    const hashedPassword = await bcrypt.hash(password, 10);
    const admin = new CampAdmin({
      name,
      email,
      password: hashedPassword,
      role: "raktdaan", // optional: identify this as RaktDaan admin
      isSuperAdmin: true, // optional flag if your schema supports it
    });

    await admin.save();

    // generate token
    const token = jwt.sign({ id: admin._id, role: admin.role || 'raktdaan' }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // respond with token
    return res.status(201).json({ success: true, message: "RaktDaan admin registered successfully", data: { token, user: { id: admin._id, name: admin.name, email: admin.email } } });
  } catch (error) {
    console.error("RaktDaan registration error:", error);
    return res.status(500).json({ success: false, message: "Server error", data: null });
  }
};



export const registerBloodBank = async (req, res) => {
  try {
    const {
      name,
      address,
      contactNumber,
      email,
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

    // check duplicate email
    const existing = await BloodBank.findOne({ email });
    if (existing) {
      return res.status(400).json({ success: false, message: "Blood bank with this email already exists.", data: null });
    }

    const bloodBank = await BloodBank.create({
      name,
      address,
      contactNumber,
      email,
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

    return res.status(201).json({ success: true, message: "Blood bank registered successfully.", data: bloodBank });

  } catch (error) {
    console.error("Error registering blood bank:", error);
    return res.status(500).json({ success: false, message: "Server error.", data: null });
  }
};