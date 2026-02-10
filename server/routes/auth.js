
const express = require('express');
const router = express.Router();
const { sql, poolPromise } = require('../db');

// Login Route
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }

        const pool = await poolPromise;
        
        // Plaintext password check as requested
        const result = await pool.request()
            .input('email', sql.NVarChar, email)
            .query('SELECT * FROM Users WHERE email = @email');

        const user = result.recordset[0];

        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Direct comparison (CAUTION: Not secure for production, but requested)
        if (user.password !== password) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Return user info (omit password)
        const { password: _, ...userWithoutPassword } = user;
        
        // Log the successful login
         try {
            await pool.request()
                .input('action', 'LOGIN')
                .input('performedBy', email)
                .input('success', 1)
                .query(`INSERT INTO AdminAuditLog (action, performedBy, success) VALUES (@action, @performedBy, @success)`);
        } catch (logErr) {
            console.error('Failed to log login:', logErr);
        }

        res.json({ 
            success: true, 
            user: userWithoutPassword,
            token: 'mock-jwt-token-for-now' // In a real app, sign a JWT here
        });

    } catch (err) {
        console.error('Login error:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
