
const express = require('express');

process.on('uncaughtException', (err) => {
    console.error('UNCAUGHT EXCEPTION:', err);
});

process.on('unhandledRejection', (reason, p) => {
    console.error('UNHANDLED REJECTION:', reason);
});

const cors = require('cors');
const { poolPromise } = require('./db');
const apiRoutes = require('./routes/api');
const commsRoutes = require('./routes/comms');
const authRoutes = require('./routes/auth');
const sasRoutes = require('./routes/sas');
const { createRateLimiter } = require('./middleware/rateLimit');

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({ origin: '*' }));
app.use(express.json());

const apiRateLimiter = createRateLimiter({
    windowMs: Number(process.env.API_RATE_LIMIT_WINDOW_MS || 60_000),
    maxRequests: Number(process.env.API_RATE_LIMIT_MAX_REQUESTS || 120),
    keyPrefix: 'api'
});

const authRateLimiter = createRateLimiter({
    windowMs: Number(process.env.AUTH_RATE_LIMIT_WINDOW_MS || 60_000),
    maxRequests: Number(process.env.AUTH_RATE_LIMIT_MAX_REQUESTS || 20),
    keyPrefix: 'auth'
});

// Request logging
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// Routes
app.use('/api/auth', authRateLimiter, authRoutes);
app.use('/api', apiRateLimiter, apiRoutes);
app.use('/api/comms', commsRoutes);
app.use('/api/sas', sasRoutes);

// Health Check
app.get('/health', async (req, res) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request().query('SELECT 1 as health');
        res.json({ status: 'ok', db: 'connected', result: result.recordset[0] });
    } catch (err) {
        res.status(500).json({ status: 'error', db: 'disconnected', error: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
