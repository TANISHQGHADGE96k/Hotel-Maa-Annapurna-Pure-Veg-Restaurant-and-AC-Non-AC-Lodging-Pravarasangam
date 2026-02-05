import express from 'express';
import { adminLogin, getDashboardAnalytics } from '../controllers/adminController.js';
import { verifyToken } from '../middleware/auth.js';
import { loginValidation, validate } from '../middleware/validation.js';
import { loginLimiter } from '../middleware/rateLimiter.js';

const router = express.Router();

// Login route (public but rate-limited)
router.post('/login', loginLimiter, loginValidation, validate, adminLogin);

// Protected routes
router.get('/dashboard', verifyToken, getDashboardAnalytics);

export default router;
