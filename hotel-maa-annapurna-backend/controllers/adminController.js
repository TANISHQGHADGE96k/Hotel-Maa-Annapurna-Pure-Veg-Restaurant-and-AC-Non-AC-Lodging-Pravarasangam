import { pool } from '../config/database.js';
import bcrypt from 'bcryptjs';
import { generateToken } from '../middleware/auth.js';

// Initialize default admin user if not exists
export const initializeAdmin = async () => {
    try {
        const [users] = await pool.execute(
            'SELECT * FROM admin_users WHERE username = ?',
            [process.env.DEFAULT_ADMIN_USERNAME || 'admin']
        );

        if (users.length === 0) {
            const hashedPassword = await bcrypt.hash(
                process.env.DEFAULT_ADMIN_PASSWORD || 'Admin@123',
                10
            );

            await pool.execute(
                'INSERT INTO admin_users (username, password_hash, email) VALUES (?, ?, ?)',
                [
                    process.env.DEFAULT_ADMIN_USERNAME || 'admin',
                    hashedPassword,
                    process.env.DEFAULT_ADMIN_EMAIL || 'admin@hotelmaaannapurna.com'
                ]
            );

            console.log('✅ Default admin user created');
        }
    } catch (error) {
        console.error('Error initializing admin:', error);
    }
};

// Admin login
export const adminLogin = async (req, res, next) => {
    try {
        const { username, password } = req.body;

        // Get admin user
        const [users] = await pool.execute(
            'SELECT * FROM admin_users WHERE username = ?',
            [username]
        );

        if (users.length === 0) {
            return res.status(401).json({
                success: false,
                message: 'Invalid credentials'
            });
        }

        const user = users[0];

        // Verify password
        const isValidPassword = await bcrypt.compare(password, user.password_hash);

        if (!isValidPassword) {
            return res.status(401).json({
                success: false,
                message: 'Invalid credentials'
            });
        }

        // Generate token
        const token = generateToken(user);

        res.json({
            success: true,
            message: 'Login successful',
            data: {
                token,
                user: {
                    id: user.id,
                    username: user.username,
                    email: user.email
                }
            }
        });
    } catch (error) {
        next(error);
    }
};

// Get dashboard analytics
export const getDashboardAnalytics = async (req, res, next) => {
    try {
        // Total rooms
        const [roomCount] = await pool.execute(
            'SELECT COUNT(*) as total FROM rooms'
        );

        // Available rooms
        const [availableCount] = await pool.execute(
            'SELECT COUNT(*) as total FROM rooms WHERE available = TRUE'
        );

        // Total reviews
        const [reviewCount] = await pool.execute(
            'SELECT COUNT(*) as total FROM reviews'
        );

        // Pending reviews
        const [pendingCount] = await pool.execute(
            'SELECT COUNT(*) as total FROM reviews WHERE approved = FALSE'
        );

        // Approved reviews
        const [approvedCount] = await pool.execute(
            'SELECT COUNT(*) as total FROM reviews WHERE approved = TRUE'
        );

        // Average rating
        const [avgRating] = await pool.execute(
            'SELECT AVG(rating) as avg_rating FROM reviews WHERE approved = TRUE'
        );

        // Recent reviews
        const [recentReviews] = await pool.execute(
            'SELECT id, name, rating, review_text, approved, created_at FROM reviews ORDER BY created_at DESC LIMIT 5'
        );

        // Total gallery images
        const [galleryCount] = await pool.execute(
            'SELECT COUNT(*) as total FROM gallery'
        );

        // Total contact submissions
        const [contactCount] = await pool.execute(
            'SELECT COUNT(*) as total FROM contact_submissions'
        );

        res.json({
            success: true,
            data: {
                rooms: {
                    total: roomCount[0].total,
                    available: availableCount[0].total
                },
                reviews: {
                    total: reviewCount[0].total,
                    pending: pendingCount[0].total,
                    approved: approvedCount[0].total,
                    avgRating: parseFloat((avgRating[0].avg_rating || 0).toFixed(1))
                },
                gallery: {
                    total: galleryCount[0].total
                },
                contacts: {
                    total: contactCount[0].total
                },
                recentReviews
            }
        });
    } catch (error) {
        next(error);
    }
};
