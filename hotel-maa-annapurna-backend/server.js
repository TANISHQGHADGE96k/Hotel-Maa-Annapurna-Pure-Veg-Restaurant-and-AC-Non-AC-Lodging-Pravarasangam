import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { testConnection } from './config/database.js';
import { initializeAdmin } from './controllers/adminController.js';
import { apiLimiter } from './middleware/rateLimiter.js';
import { errorHandler, notFoundHandler } from './middleware/errorHandler.js';

// Import routes
import roomRoutes from './routes/rooms.js';
import reviewRoutes from './routes/reviews.js';
import galleryRoutes from './routes/gallery.js';
import contactRoutes from './routes/contact.js';
import adminRoutes from './routes/admin.js';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security middleware
app.use(helmet());

// CORS configuration
const allowedOrigins = process.env.FRONTEND_URL
    ? process.env.FRONTEND_URL.split(',').map(url => url.trim())
    : ['http://localhost:5173', 'http://127.0.0.1:5500', 'http://localhost:5500'];

app.use(cors({
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps, curl, Postman)
        if (!origin) return callback(null, true);

        // Allow file:// protocol for local HTML files
        if (origin.startsWith('file://')) return callback(null, true);

        if (allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            console.log('CORS blocked origin:', origin);
            callback(null, true); // Allow all in development
        }
    },
    credentials: true
}));

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Trust proxy (for getting real IP addresses when behind reverse proxy)
app.set('trust proxy', 1);

// Apply rate limiting to all API routes
app.use('/api', apiLimiter);

// Health check route
app.get('/health', (req, res) => {
    res.json({
        success: true,
        message: 'Hotel Maa Annapurna API is running',
        timestamp: new Date().toISOString()
    });
});

// API Routes
app.use('/api/rooms', roomRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/gallery', galleryRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/admin', adminRoutes);

// 404 handler
app.use(notFoundHandler);

// Error handler (must be last)
app.use(errorHandler);

// Start server
const startServer = async () => {
    try {
        // Test database connection
        const isConnected = await testConnection();

        if (!isConnected) {
            console.error('Failed to connect to database. Please check your configuration.');
            process.exit(1);
        }

        // Initialize default admin user
        await initializeAdmin();

        // Start listening
        app.listen(PORT, () => {
            console.log(`
╔════════════════════════════════════════════════════════════╗
║                                                            ║
║     🏨 Hotel Maa Annapurna API Server                     ║
║                                                            ║
║     Server running on: http://localhost:${PORT}            ║
║     Environment: ${process.env.NODE_ENV || 'development'}                               ║
║     Database: ${process.env.DB_NAME || 'hotel_maa_annapurna'}                        ║
║                                                            ║
║     API Routes:                                            ║
║     - GET  /api/rooms                                      ║
║     - GET  /api/reviews                                    ║
║     - POST /api/reviews (QR-accessible)                    ║
║     - GET  /api/gallery                                    ║
║     - POST /api/contact                                    ║
║     - POST /api/admin/login                                ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝
      `);
        });
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
};

startServer();
