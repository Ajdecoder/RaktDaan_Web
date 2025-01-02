import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const campAdminSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

campAdminSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

export default mongoose.model('CampAdmin', campAdminSchema , 'CampAdminCollection');
