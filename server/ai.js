const express = require('express');
const router = express.Router();
const { OpenAI } = require('openai');
const { authenticateToken } = require('./auth');

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

router.post('/invoke', authenticateToken, async (req, res) => {
    const { prompt, response_json_schema } = req.body;

    try {
        const response = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [{ role: "user", content: prompt }],
            response_format: response_json_schema ? { type: "json_object" } : { type: "text" }
        });

        const content = response.choices[0].message.content;
        res.json(response_json_schema ? JSON.parse(content) : { text: content });
    } catch (err) {
        console.error('OpenAI call failed:', err);
        res.status(500).json({ error: 'AI generation failed' });
    }
});

module.exports = router;
