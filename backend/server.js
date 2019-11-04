'use strict'
const authRoutes = require('./auth/auth.routes');
const express = require('express');
const properties = require('./config/properties');

const app = express();
const router = express.Router();

app.listen(properties.PORT, () => {
    console.log(`Server run on page: ${properties.PORT}`);
});