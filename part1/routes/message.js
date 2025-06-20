var express = require('express');
var router = express.Router();
var db = require('../db');

router.get('/api/dogs', async (req, res) => {
    try {
        const [dogs] = await db.execute('SELECT * FROM dogs');

})