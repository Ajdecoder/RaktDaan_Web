import express from 'express';
import { donorLogin, campAdminLogin, raktdaanLogin, donorRegister, campAdminRegister, registerBloodBank, raktdaanRegister } from '../controllers/auth.controller.js';

const authRoutes = express.Router();

// Authentication Routes
authRoutes.post('/donor-login', donorLogin);
authRoutes.post('/donor-register', donorRegister);
authRoutes.post('/camp-admin-login', campAdminLogin);
authRoutes.post('/camp-admin-register', campAdminRegister);
authRoutes.post('/raktdaan-login', raktdaanLogin);
authRoutes.post('/raktdaan-register', raktdaanRegister);


// Blood Bank Routes
authRoutes.post('/add-bloodbank', registerBloodBank);
authRoutes.post('/bloodbank-register', registerBloodBank);

export default authRoutes;
