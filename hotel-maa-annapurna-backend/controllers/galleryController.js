import { pool } from '../config/database.js';

// Get gallery images (public)
export const getGalleryImages = async (req, res, next) => {
    try {
        const { category } = req.query;

        let query = 'SELECT * FROM gallery WHERE 1=1';
        const params = [];

        if (category) {
            query += ' AND category = ?';
            params.push(category);
        }

        query += ' ORDER BY created_at DESC';

        const [images] = await pool.execute(query, params);

        res.json({
            success: true,
            data: images
        });
    } catch (error) {
        next(error);
    }
};

// Admin: Upload gallery image
export const uploadGalleryImage = async (req, res, next) => {
    try {
        const { category, image_url, caption } = req.body;

        const [result] = await pool.execute(
            'INSERT INTO gallery (category, image_url, caption) VALUES (?, ?, ?)',
            [category, image_url, caption || null]
        );

        res.status(201).json({
            success: true,
            message: 'Image uploaded successfully',
            data: { id: result.insertId }
        });
    } catch (error) {
        next(error);
    }
};

// Admin: Delete gallery image
export const deleteGalleryImage = async (req, res, next) => {
    try {
        const { id } = req.params;

        const [result] = await pool.execute(
            'DELETE FROM gallery WHERE id = ?',
            [id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({
                success: false,
                message: 'Image not found'
            });
        }

        res.json({
            success: true,
            message: 'Image deleted successfully'
        });
    } catch (error) {
        next(error);
    }
};
