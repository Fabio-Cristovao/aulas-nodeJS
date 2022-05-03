require('dotenv').config();
const express = require('express');
const { redirect } = require('express/lib/response');
const router = require('../routes/contacts');

const app = express();

app.use('/', router);
app.set('view engine', 'hbs');




const contacts = []

const port = process.env.PORT || 3001;

app.listen(port, () => {
   console.log(`Server is running on port ${port}`)
})


