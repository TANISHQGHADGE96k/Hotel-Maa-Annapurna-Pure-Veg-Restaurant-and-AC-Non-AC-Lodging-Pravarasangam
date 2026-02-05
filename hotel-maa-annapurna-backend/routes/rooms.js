import express from 'express';
import {
    getAllRooms,
    getRoomById,
    createRoom,
    updateRoom,
    deleteRoom
} from '../controllers/roomController.js';
import { verifyToken } from '../middleware/auth.js';
import { roomValidation, idValidation, validate } from '../middleware/validation.js';

const router = express.Router();

// Public routes
router.get('/', getAllRooms);
router.get('/:id', idValidation, validate, getRoomById);

// Admin routes (protected)
router.post('/', verifyToken, roomValidation, validate, createRoom);
router.put('/:id', verifyToken, idValidation, roomValidation, validate, updateRoom);
router.delete('/:id', verifyToken, idValidation, validate, deleteRoom);

export default router;
