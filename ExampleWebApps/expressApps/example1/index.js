const express = require('express');
const { Pool } = require('pg');

const app = express();
const PORT = 4000;

// app.get('/', (req, res) => {
//     res.send({ message: 'Hello from Express.js!' });
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });

// PostgreSQL Connection
const pool = new Pool({
    user: 'devjchanadmin',         // Replace with your PostgreSQL username
    host: 'localhost',
    database: 'exampledb',      // Replace with your database name
    password: 'serverdevpass', // Replace with your PostgreSQL password
    port: 5432,
});

// Test the database connection
pool.connect()
    .then(() => console.log('Connected to PostgreSQL'))
    .catch(err => console.error('Connection error', err.stack));

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

app.get('/users', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM users');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database query failed' });
    }
});
