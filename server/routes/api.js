
const express = require('express');
const router = express.Router();
const { sql, poolPromise } = require('../db');

const ALLOWED_TABLES = [
    'MissionScenario',
    'MissionPerformance',
    'AdminAuditLog',
    'AdminAccessControl',
    'Users'
];

// Helper to validate table name
const validateTable = (tableName) => {
    if (!ALLOWED_TABLES.includes(tableName)) {
        throw new Error('Invalid table name');
    }
    return tableName;
};

// --- Generic CRUD ---

// Get all (with optional limit/sort? - handling simply for now)
router.get('/entities/:table', async (req, res) => {
    try {
        const pool = await poolPromise;
        const tableName = validateTable(req.params.table);
        
        // Basic SELECT *
        const result = await pool.request().query(`SELECT * FROM ${tableName}`);
        res.json(result.recordset);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get by ID
router.get('/entities/:table/:id', async (req, res) => {
    try {
        const pool = await poolPromise;
        const tableName = validateTable(req.params.table);
        const id = req.params.id;
        
        const result = await pool.request()
            .input('id', sql.VarChar, id) // Assuming ID is string/GUID
            .query(`SELECT * FROM ${tableName} WHERE id = @id`);
            
        res.json(result.recordset[0] || null);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Create
router.post('/entities/:table', async (req, res) => {
    try {
        const pool = await poolPromise;
        const tableName = validateTable(req.params.table);
        const data = req.body;
        
        // Dynamic Insert
        const keys = Object.keys(data).filter(k => k !== 'id'); // specific ID handling if needed, or allow identity
        if (keys.length === 0) return res.status(400).json({ error: 'No data provided' });

        const columns = keys.join(', ');
        const values = keys.map(k => `@${k}`).join(', ');
        
        const request = pool.request();
        keys.forEach(key => {
            // Simple type inference or just let MSSQL handle conversion from param
            // Note: Objects/Arrays need JSON.stringify if storing as JSON text
            let value = data[key];
            if (typeof value === 'object' && value !== null) {
                value = JSON.stringify(value);
            }
            request.input(key, value);
        });

        // If ID is provided, include it
        let query = '';
        if (data.id) {
             request.input('id', data.id);
             query = `INSERT INTO ${tableName} (id, ${columns}) OUTPUT inserted.* VALUES (@id, ${values})`;
        } else {
             query = `INSERT INTO ${tableName} (${columns}) OUTPUT inserted.* VALUES (${values})`;
        }

        const result = await request.query(query);
        res.json(result.recordset[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

// Update
router.put('/entities/:table/:id', async (req, res) => {
    try {
        const pool = await poolPromise;
        const tableName = validateTable(req.params.table);
        const id = req.params.id;
        const data = req.body;
        
        const keys = Object.keys(data).filter(k => k !== 'id' && k !== 'created_date'); // don't update key or created_date usually
        if (keys.length === 0) return res.status(400).json({ error: 'No data to update' });

        const setClause = keys.map(k => `${k} = @${k}`).join(', ');
        
        const request = pool.request();
        request.input('id', id);
        keys.forEach(key => {
            let value = data[key];
            if (typeof value === 'object' && value !== null) {
                value = JSON.stringify(value);
            }
            request.input(key, value);
        });

        const result = await request.query(`
            UPDATE ${tableName}
            SET ${setClause}, updated_date = GETUTCDATE()
            OUTPUT inserted.*
            WHERE id = @id
        `);
        
        res.json(result.recordset[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete
router.delete('/entities/:table/:id', async (req, res) => {
    try {
        const pool = await poolPromise;
        const tableName = validateTable(req.params.table);
        const id = req.params.id;
        
        await pool.request()
            .input('id', id)
            .query(`DELETE FROM ${tableName} WHERE id = @id`);
            
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
