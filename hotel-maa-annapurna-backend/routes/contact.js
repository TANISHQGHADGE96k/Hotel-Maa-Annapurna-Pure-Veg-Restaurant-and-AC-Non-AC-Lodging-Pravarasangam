import express from 'express';
import { submitContact, getAllContacts } from '../controllers/contactController.js';
import { verifyToken } from '../middleware/auth.js';
import { contactValidation, validate } from '../middleware/validation.js';
import { contactLimiter } from '../middleware/rateLimiter.js';

const router = express.Router();

// Public route
router.post('/', contactLimiter, contactValidation, validate, submitContact);

// Admin route (protected)
router.get('/all', verifyToken, getAllContacts);

export default router;
