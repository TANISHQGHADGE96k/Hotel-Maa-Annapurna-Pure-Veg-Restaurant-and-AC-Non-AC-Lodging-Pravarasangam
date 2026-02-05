import { pool } from '../config/database.js';

// Get all rooms (public)
export const getAllRooms = async (req, res, next) => {
    try {
        const { type, ac_type, available } = req.query;

        let query = 'SELECT * FROM rooms WHERE 1=1';
        const params = [];

        if (type) {
            query += ' AND type = ?';
            params.push(type);
        }

        if (ac_type) {
            query += ' AND ac_type = ?';
            params.push(ac_type);
        }

        if (available !== undefined) {
            query += ' AND available = ?';
            params.push(available === 'true' ? 1 : 0);
        }

        query += ' ORDER BY type, price';

        const [rooms] = await pool.execute(query, params);

        res.json({
            success: true,
            data: rooms
        });
    } catch (error) {
        next(error);
    }
};

// Get single room by ID (public)
export const getRoomById = async (req, res, next) => {
    try {
        const { id } = req.params;

        const [rooms] = await pool.execute(
            'SELECT * FROM rooms WHERE id = ?',
            [id]
        );

        if (rooms.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'Room not found'
            });
        }

        res.json({
            success: true,
            data: rooms[0]
        });
    } catch (error) {
        next(error);
    }
};

// Admin: Create room
export const createRoom = async (req, res, next) => {
    try {
        const { name, type, ac_type, price, description, facilities, image_url, available } = req.body;

        const facilitiesJson = facilities ? JSON.stringify(facilities) : null;

        const [result] = await pool.execute(
            'INSERT INTO rooms (name, type, ac_type, price, description, facilities, image_url, available) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [name, type, ac_type, price, description || null, facilitiesJson, image_url || null, available !== undefined ? available : true]
        );

        res.status(201).json({
            success: true,
            message: 'Room created successfully',
            data: { id: result.insertId }
        });
    } catch (error) {
        next(error);
    }
};

// Admin: Update room
export const updateRoom = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, type, ac_type, price, description, facilities, image_url, available } = req.body;

        const facilitiesJson = facilities ? JSON.stringify(facilities) : null;

        const [result] = await pool.execute(
            'UPDATE rooms SET name = ?, type = ?, ac_type = ?, price = ?, description = ?, facilities = ?, image_url = ?, available = ? WHERE id = ?',
            [name, type, ac_type, price, description || null, facilitiesJson, image_url || null, available !== undefined ? available : true, id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({
                success: false,
                message: 'Room not found'
            });
        }

        res.json({
            success: true,
            message: 'Room updated successfully'
        });
    } catch (error) {
        next(error);
    }
};

// Admin: Delete room
export const deleteRoom = async (req, res, next) => {
    try {
        const { id } = req.params;

        const [result] = await pool.execute(
            'DELETE FROM rooms WHERE id = ?',
            [id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({
                success: false,
                message: 'Room not found'
            });
        }

        res.json({
            success: true,
            message: 'Room deleted successfully'
        });
    } catch (error) {
        next(error);
    }
};
