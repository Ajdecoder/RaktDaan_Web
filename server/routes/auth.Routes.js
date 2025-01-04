import express from 'express';
import { donorLogin, campAdminLogin, raktdaanLogin, donorRegister, campAdminRegister,  } from '../controllers/auth.controller.js';

const authRoutes = express.Router();

// Authentication Routes
authRoutes.post('/donor-login', donorLogin);
authRoutes.post('/donor-register', donorRegister);
authRoutes.post('/camp-admin-login', campAdminLogin);
authRoutes.post('/camp-admin-register', campAdminRegister);
authRoutes.post('/raktdaan-login', raktdaanLogin);



export default authRoutes;
