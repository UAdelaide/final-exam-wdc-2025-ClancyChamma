var express = require('express');
var router = express.Router();
var db = require('../db');

router.get('/dogs', async (req, res) => {
        const [rows] = await db.query(`
            SELECT d.name AS dog_name, d.size, u.username AS owner_username
            FROM Dogs d
            JOIN Users u ON d.owner_id = u.user_id
            `);
        res.json(rows);
});

router.get('/api/walkrequests/open', async (req, res) => {
            const [rows] = await db.query(`

            `);
});

router.get('/api/walkrequests/open', async (req, res) => {
    
})

// router.get('/api/walkers/summary', async (req, res) => {
//         const [rows] = await db.query(`
//             SELECT
//                 u.username AS walker_username,
//                 COUNT(wr.request_id) AS total_ratings,
//                 AVG(wr.rating) AS average_rating,
//                 COUNT(DISTINCT wa.request_id) AS total_walks
//             FROM Users u
//             LEFT JOIN WalkRequests wr ON u.user_id = wr.walker_id
//         `);
//         res.json(rows);
// });

module.exports = router;