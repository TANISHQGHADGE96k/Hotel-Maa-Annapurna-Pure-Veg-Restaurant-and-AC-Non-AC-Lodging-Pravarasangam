import express from 'express';
import {
    getGalleryImages,
    uploadGalleryImage,
    deleteGalleryImage
} from '../controllers/galleryController.js';
import { verifyToken } from '../middleware/auth.js';
import { galleryValidation, idValidation, validate } from '../middleware/validation.js';

const router = express.Router();

// Public routes
router.get('/', getGalleryImages);

// Admin routes (protected)
router.post('/', verifyToken, galleryValidation, validate, uploadGalleryImage);
router.delete('/:id', verifyToken, idValidation, validate, deleteGalleryImage);

export default router;
