require('dotenv').config();
require('./config/database').connect();
const express = require('express');
const app = express();

app.use(express.json());

import User = require('./models/user')

app.get('/register', (req, res) => {

})


// login logic goes on haere;

module.exports = app;




