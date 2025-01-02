import express from 'express';
import { donorLogin, campAdminLogin, raktdaanLogin, addBloodBank, donorRegister, campAdminRegister, bloodBankRegister } from '../controllers/authController.js';

const authRoutes = express.Router();

// Authentication Routes
authRoutes.post('/donor-login', donorLogin);
authRoutes.post('/donor-register', donorRegister);
authRoutes.post('/camp-admin-login', campAdminLogin);
authRoutes.post('/camp-admin-register', campAdminRegister);
authRoutes.post('/raktdaan-login', raktdaanLogin);

// Blood Bank Routes
authRoutes.post('/add-bloodbank', addBloodBank);
authRoutes.post('/bloodbank-register', bloodBankRegister);

export default authRoutes;
