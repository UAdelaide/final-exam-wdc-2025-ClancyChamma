const express = require('express');
const path = require('path');
require('dotenv').config();
var cookieParser = require('cookie-parser');
const session = require('express-session');


const app = express();

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));
app.use(cookieParser());


// Routes
const walkRoutes = require('./routes/walkRoutes');
const userRoutes = require('./routes/userRoutes');

app.use('/api/walks', walkRoutes);
app.use('/api/users', userRoutes);

app.use(session({
    secret: 'b706835de79a2b4e80506f582af3676ac8361638',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))

// new
app.get('/owner-dashboard', (req, res) => {
    if (!req.session.user || req.session.user.role !== 'owner') {
        return res.redirect('/')
    }
    res.sendFile(path.join(__dirname, 'public', 'owner-dashboard.html'));
});

app.get('/walker-dashboard', (req, res) => {
    if (!req.session.user || req.session.user.role !== 'walker') {
        return res.redirect('/')
    }
    res.sendFile(path.join(__dirname, 'public', 'walker-dashboard.html'));
});

// Export the app instead of listening here
module.exports = app;