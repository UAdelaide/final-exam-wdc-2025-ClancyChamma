const express = require('express');
const path = require('path');
require('dotenv').config();
app.use(session({
    secret: proccess.env.SESSION_SECRET || 'dogwalksecret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: process.env.NODE_ENV === 'production',
        maxAge: 24 * 60 * 60 * 1000
    }
}));
const session = require('express-session');

const app = express();

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));


// Routes
const walkRoutes = require('./routes/walkRoutes');
const userRoutes = require('./routes/userRoutes');

app.use('/api/walks', walkRoutes);
app.use('/api/users', userRoutes);

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