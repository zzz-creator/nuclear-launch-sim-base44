const express = require('express');
const cors = require('cors');
const db = require('./db');
const { router: authRouter } = require('./auth');
const entitiesRouter = require('./entities');
const aiRouter = require('./ai');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRouter);
app.use('/api/entities', entitiesRouter);
app.use('/api/ai', aiRouter);

// Database initialization
db.connect();

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
