const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const app = express();

// use .env file in config folder
dotenv.config({ path: "./config/.env" });

// connect to Database
connectDB();

app.get('/', (req, res) => res.send('Hello world!'));

const port = process.env.PORT || 3003;

app.listen(port, () => console.log(`Server running on port ${port}`));