import { body, param, query, validationResult } from 'express-validator';

// Middleware to check validation results
export const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            message: 'Validation failed',
            errors: errors.array()
        });
    }
    next();
};

// Review validation rules
export const reviewValidation = [
    body('name')
        .trim()
        .notEmpty().withMessage('Name is required')
        .isLength({ min: 2, max: 100 }).withMessage('Name must be between 2 and 100 characters')
        .escape(),
    body('location')
        .trim()
        .notEmpty().withMessage('Location is required')
        .isLength({ min: 2, max: 100 }).withMessage('Location must be between 2 and 100 characters')
        .escape(),
    body('rating')
        .isInt({ min: 1, max: 5 }).withMessage('Rating must be between 1 and 5'),
    body('review_text')
        .trim()
        .notEmpty().withMessage('Review text is required')
        .isLength({ min: 10, max: 1000 }).withMessage('Review must be between 10 and 1000 characters')
        .escape()
];

// Room validation rules (for admin)
export const roomValidation = [
    body('name')
        .trim()
        .notEmpty().withMessage('Room name is required')
        .isLength({ max: 100 }).withMessage('Room name must not exceed 100 characters')
        .escape(),
    body('type')
        .isIn(['Single', 'Double', 'Family']).withMessage('Invalid room type'),
    body('ac_type')
        .isIn(['AC', 'Non-AC']).withMessage('Invalid AC type'),
    body('price')
        .isFloat({ min: 0 }).withMessage('Price must be a positive number'),
    body('description')
        .optional()
        .trim()
        .escape(),
    body('facilities')
        .optional()
        .isArray().withMessage('Facilities must be an array'),
    body('image_url')
        .optional()
        .trim()
        .isLength({ max: 255 }).withMessage('Image URL too long'),
    body('available')
        .optional()
        .isBoolean().withMessage('Available must be a boolean')
];

// Contact form validation
export const contactValidation = [
    body('name')
        .trim()
        .notEmpty().withMessage('Name is required')
        .isLength({ min: 2, max: 100 }).withMessage('Name must be between 2 and 100 characters')
        .escape(),
    body('email')
        .trim()
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Invalid email format')
        .normalizeEmail(),
    body('phone')
        .optional()
        .trim()
        .matches(/^[0-9+\-\s()]+$/).withMessage('Invalid phone number format'),
    body('message')
        .trim()
        .notEmpty().withMessage('Message is required')
        .isLength({ min: 10, max: 1000 }).withMessage('Message must be between 10 and 1000 characters')
        .escape()
];

// Gallery validation
export const galleryValidation = [
    body('category')
        .isIn(['Hotel', 'Rooms', 'Food']).withMessage('Invalid category'),
    body('image_url')
        .trim()
        .notEmpty().withMessage('Image URL is required')
        .isLength({ max: 255 }).withMessage('Image URL too long'),
    body('caption')
        .optional()
        .trim()
        .isLength({ max: 255 }).withMessage('Caption too long')
        .escape()
];

// Admin login validation
export const loginValidation = [
    body('username')
        .trim()
        .notEmpty().withMessage('Username is required')
        .escape(),
    body('password')
        .notEmpty().withMessage('Password is required')
];

// Param validation
export const idValidation = [
    param('id').isInt({ min: 1 }).withMessage('Invalid ID')
];

// Query validation for pagination
export const paginationValidation = [
    query('page')
        .optional()
        .isInt({ min: 1 }).withMessage('Page must be a positive integer'),
    query('limit')
        .optional()
        .isInt({ min: 1, max: 100 }).withMessage('Limit must be between 1 and 100')
];
