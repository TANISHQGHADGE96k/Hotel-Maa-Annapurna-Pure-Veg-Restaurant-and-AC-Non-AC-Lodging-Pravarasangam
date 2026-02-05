import express from 'express';
import {
    getApprovedReviews,
    submitReview,
    getAllReviews,
    approveReview,
    deleteReview
} from '../controllers/reviewController.js';
import { verifyToken } from '../middleware/auth.js';
import { reviewValidation, idValidation, paginationValidation, validate } from '../middleware/validation.js';
import { reviewLimiter } from '../middleware/rateLimiter.js';

const router = express.Router();

// Public routes
router.get('/', paginationValidation, validate, getApprovedReviews);
router.post('/', reviewLimiter, reviewValidation, validate, submitReview);

// Admin routes (protected)
router.get('/admin/all', verifyToken, getAllReviews);
router.put('/:id/approve', verifyToken, idValidation, validate, approveReview);
router.delete('/:id', verifyToken, idValidation, validate, deleteReview);

export default router;
