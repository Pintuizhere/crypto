import express from 'express';
import { registerUser, loginUser, logoutUser } from '../controllers/authController.js';

const router = express.Router();

// Route - POST /api/auth/signup
router.post('/signup', registerUser);

// Route - POST /api/auth/login
router.post('/login', loginUser);

// Route - POST /api/auth/logout
router.post('/logout', logoutUser);

export default router;
