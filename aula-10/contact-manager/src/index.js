require('dotenv').config();
const { join } = require('path');
const cookieParser = require('cookie-parser');
const sessions = require('express-session');
const express = require('express');
const handlebars = require('express-handlebars');
const mongoose = require('mongoose');


const routes = require('./routes');

const port = process.env.PORT || 3000;
const app = express();

const oneDay = 1000 * 60 * 60 * 24;
app.use(sessions({
    secret: 'thisismysecretsldvhsdkvsdkvnsdjkv',
    saveUninitialized: true,
    cookie: { maxAge: oneDay },
    resave: false
}));

app.engine('hbs', handlebars.engine({
    defaultLayout: 'main',
    extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', join(__dirname, '..', 'views'));

app.use(express.static(join(__dirname, '..', 'public')));
app.use(express.urlencoded({
    extended: true
}));
app.use(cookieParser());
app.use(routes);

app.get('/', (req, res) => {
    session = req.session;
    if (session.userid) {
        res.redirect('/contacts');


    } else {
        console.log(req.session)
        res.redirect('/login');
    }
})

app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
})

const myusername = 'user1';
const mypassword = 'mypassword';
let session;

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username == myusername && password == mypassword) {
        session = req.session;
        session.userid = username;
        console.log(req.session)
        res.redirect('/contacts')
    } else {
        res.send('not allowed')
    }
})

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('error', err => console.log('[error]', 'Error connecting to database:', err.message));
mongoose.connection.once('open', () => {
    console.log('[info]', 'Connected to database');
    app.listen(port, () => console.log(`App started at http://localhost:${port}`));
});
