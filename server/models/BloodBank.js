import mongoose from 'mongoose';

const bloodBankSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  contactNumber: String,
  email: { type: String, required: true, unique: true },
  parentHospital: String,
  shortName: String,
  category: String,
  contactPerson: String,
  firstRegistrationDate: Date,
  licenceNo: String,
  fromDate: Date,
  toDate: Date,
  componentFacility: Boolean,
  apheresisFacility: Boolean,
  helplineNumber: String,
  address1: String,
  address2: String,
  pincode: String,
  latitude: String,
  longitude: String,
  website: String,
  noOfBeds: Number,
  state: String,
  district: String,
  city: String,
});

export default mongoose.model('BloodBank', bloodBankSchema , 'BloodBankCollection');
