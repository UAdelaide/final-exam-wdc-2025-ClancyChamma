var express = require('express');
var router = express.Router();
var db = require('../db');

router.get('/dogs', async (req, res) => {
        const [dogs] = await db.query(`
            SELECT d.name AS dog_name, d.size, u.username AS owner_username
            FROM Dogs d
            JOIN Users u ON d.owner_id = u.user_id
            `);
        res.json(rows);
});

router.get('/api/walkrequests/open', async (req, res) => {
    const []
})

module.exports = router;