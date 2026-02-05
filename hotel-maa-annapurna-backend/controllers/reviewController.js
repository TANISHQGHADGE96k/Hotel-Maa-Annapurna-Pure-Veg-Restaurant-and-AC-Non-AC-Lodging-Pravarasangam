import { pool } from '../config/database.js';

// Get approved reviews (public)
export const getApprovedReviews = async (req, res, next) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const sort = req.query.sort || 'recent'; // recent, highest, lowest
        const offset = (page - 1) * limit;

        let orderBy = 'created_at DESC';
        if (sort === 'highest') {
            orderBy = 'rating DESC, created_at DESC';
        } else if (sort === 'lowest') {
            orderBy = 'rating ASC, created_at DESC';
        }

        // Get approved reviews with pagination
        const [reviews] = await pool.execute(
            `SELECT id, name, location, rating, review_text, created_at 
       FROM reviews 
       WHERE approved = TRUE 
       ORDER BY ${orderBy}
       LIMIT ? OFFSET ?`,
            [limit, offset]
        );

        // Get total count
        const [countResult] = await pool.execute(
            'SELECT COUNT(*) as total FROM reviews WHERE approved = TRUE'
        );
        const total = countResult[0].total;

        // Calculate average rating
        const [avgResult] = await pool.execute(
            'SELECT AVG(rating) as avg_rating FROM reviews WHERE approved = TRUE'
        );
        const avgRating = avgResult[0].avg_rating || 0;

        res.json({
            success: true,
            data: {
                reviews,
                pagination: {
                    page,
                    limit,
                    total,
                    totalPages: Math.ceil(total / limit)
                },
                avgRating: parseFloat(avgRating.toFixed(1))
            }
        });
    } catch (error) {
        next(error);
    }
};

// Submit review (public - QR accessible)
export const submitReview = async (req, res, next) => {
    try {
        const { name, location, rating, review_text } = req.body;
        const ip_address = req.ip || req.connection.remoteAddress;

        // Insert review (will be pending approval)
        const [result] = await pool.execute(
            'INSERT INTO reviews (name, location, rating, review_text, ip_address) VALUES (?, ?, ?, ?, ?)',
            [name, location, rating, review_text, ip_address]
        );

        res.status(201).json({
            success: true,
            message: 'Thank you for your review! It will be visible after admin approval.',
            data: { id: result.insertId }
        });
    } catch (error) {
        next(error);
    }
};

// Admin: Get all reviews (including pending)
export const getAllReviews = async (req, res, next) => {
    try {
        const status = req.query.status; // 'approved', 'pending', or undefined (all)

        let query = 'SELECT * FROM reviews WHERE 1=1';
        const params = [];

        if (status === 'approved') {
            query += ' AND approved = TRUE';
        } else if (status === 'pending') {
            query += ' AND approved = FALSE';
        }

        query += ' ORDER BY created_at DESC';

        const [reviews] = await pool.execute(query, params);

        res.json({
            success: true,
            data: reviews
        });
    } catch (error) {
        next(error);
    }
};

// Admin: Approve review
export const approveReview = async (req, res, next) => {
    try {
        const { id } = req.params;

        const [result] = await pool.execute(
            'UPDATE reviews SET approved = TRUE WHERE id = ?',
            [id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({
                success: false,
                message: 'Review not found'
            });
        }

        res.json({
            success: true,
            message: 'Review approved successfully'
        });
    } catch (error) {
        next(error);
    }
};

// Admin: Delete review
export const deleteReview = async (req, res, next) => {
    try {
        const { id } = req.params;

        const [result] = await pool.execute(
            'DELETE FROM reviews WHERE id = ?',
            [id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({
                success: false,
                message: 'Review not found'
            });
        }

        res.json({
            success: true,
            message: 'Review deleted successfully'
        });
    } catch (error) {
        next(error);
    }
};
