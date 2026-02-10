const express = require('express');
const router = express.Router();
const db = require('./db');
const { authenticateToken } = require('./auth');

// Generic filter/query endpoint for entities
router.post('/:entity/filter', authenticateToken, async (req, res) => {
    const { entity } = req.params;
    const { filter, sort, limit } = req.body;

    try {
        let queryStr = `SELECT * FROM ${entity}`;
        const params = [];
        
        if (filter && Object.keys(filter).length > 0) {
            queryStr += ' WHERE ';
            const conditions = Object.keys(filter).map(key => {
                params.push(filter[key]);
                return `${key} = ?`;
            });
            queryStr += conditions.join(' AND ');
        }

        if (sort) {
            const direction = sort.startsWith('-') ? 'DESC' : 'ASC';
            const column = sort.startsWith('-') ? sort.substring(1) : sort;
            queryStr += ` ORDER BY ${column} ${direction}`;
        }

        if (limit) {
            queryStr += ` OFFSET 0 ROWS FETCH NEXT ${limit} ROWS ONLY`;
        }

        const results = await db.query(queryStr, params);
        res.json(results);
    } catch (err) {
        console.error(`Error filtering ${entity}:`, err);
        res.status(500).json({ error: `Failed to fetch ${entity}` });
    }
});

// Create entity
router.post('/:entity', authenticateToken, async (req, res) => {
    const { entity } = req.params;
    const data = req.body;

    try {
        const columns = Object.keys(data).join(', ');
        const placeholders = Object.keys(data).map(() => '?').join(', ');
        const values = Object.values(data).map(v => typeof v === 'object' ? JSON.stringify(v) : v);

        const queryStr = `INSERT INTO ${entity} (${columns}) VALUES (${placeholders}); SELECT SCOPE_IDENTITY() AS id;`;
        const result = await db.query(queryStr, values);
        
        res.status(201).json({ id: result[0].id, ...data });
    } catch (err) {
        console.error(`Error creating ${entity}:`, err);
        res.status(500).json({ error: `Failed to create ${entity}` });
    }
});

// Update entity
router.put('/:entity/:id', authenticateToken, async (req, res) => {
    const { entity, id } = req.params;
    const data = req.body;

    try {
        const updates = Object.keys(data).map(key => `${key} = ?`).join(', ');
        const values = [...Object.values(data).map(v => typeof v === 'object' ? JSON.stringify(v) : v), id];

        const queryStr = `UPDATE ${entity} SET ${updates} WHERE id = ?`;
        await db.query(queryStr, values);
        
        res.json({ id, ...data });
    } catch (err) {
        console.error(`Error updating ${entity}:`, err);
        res.status(500).json({ error: `Failed to update ${entity}` });
    }
});

module.exports = router;
