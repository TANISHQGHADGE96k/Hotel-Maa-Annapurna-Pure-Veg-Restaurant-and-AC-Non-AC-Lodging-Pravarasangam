import { pool } from '../config/database.js';

// Submit contact form (public)
export const submitContact = async (req, res, next) => {
    try {
        const { name, email, phone, message } = req.body;

        const [result] = await pool.execute(
            'INSERT INTO contact_submissions (name, email, phone, message) VALUES (?, ?, ?, ?)',
            [name, email, phone || null, message]
        );

        res.status(201).json({
            success: true,
            message: 'Thank you for contacting us! We will get back to you soon.',
            data: { id: result.insertId }
        });
    } catch (error) {
        next(error);
    }
};

// Admin: Get all contact submissions
export const getAllContacts = async (req, res, next) => {
    try {
        const [contacts] = await pool.execute(
            'SELECT * FROM contact_submissions ORDER BY created_at DESC'
        );

        res.json({
            success: true,
            data: contacts
        });
    } catch (error) {
        next(error);
    }
};
