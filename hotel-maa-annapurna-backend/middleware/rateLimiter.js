import rateLimit from 'express-rate-limit';

// General API rate limiter
export const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    message: {
        success: false,
        message: 'Too many requests from this IP, please try again later.'
    },
    standardHeaders: true,
    legacyHeaders: false,
});

// Review submission rate limiter (spam protection)
export const reviewLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 3, // Limit each IP to 3 review submissions per hour
    message: {
        success: false,
        message: 'You have submitted too many reviews. Please try again later.'
    },
    skipSuccessfulRequests: false,
    standardHeaders: true,
    legacyHeaders: false,
});

// Contact form rate limiter
export const contactLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 5, // Limit each IP to 5 contact form submissions per hour
    message: {
        success: false,
        message: 'Too many contact submissions. Please try again later.'
    },
    standardHeaders: true,
    legacyHeaders: false,
});

// Admin login rate limiter (prevent brute force)
export const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // Limit each IP to 5 login attempts per 15 minutes
    message: {
        success: false,
        message: 'Too many login attempts. Please try again later.'
    },
    skipSuccessfulRequests: true, // Don't count successful logins
    standardHeaders: true,
    legacyHeaders: false,
});
