const sql = require('mssql');
require('dotenv').config();

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_NAME,
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
};

async function connect() {
    try {
        await sql.connect(config);
        console.log('Connected to MSSQL');
    } catch (err) {
        console.error('Database connection failed:', err);
    }
}

async function query(text, params = []) {
    try {
        const request = new sql.Request();
        params.forEach((val, i) => {
            request.input(`param${i}`, val);
        });
        
        // Replace ? with @paramN for MSSQL
        let i = 0;
        const formattedText = text.replace(/\?/g, () => `@param${i++}`);
        
        const result = await request.query(formattedText);
        return result.recordset;
    } catch (err) {
        console.error('Query execution failed:', err);
        throw err;
    }
}

module.exports = {
    connect,
    query,
    sql
};
