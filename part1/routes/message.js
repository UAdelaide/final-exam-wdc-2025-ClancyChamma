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

router.get('/walkrequests/open', async (req, res) => {
        const [rows] = await db.query(`
            SELECT wr.request_id, d.name AS dog_name, wr.requested_time,
                wr.duration_minutes, wr.location, u.username AS owner_username
            FROM WalkRequests wr
            JOIN Dogs d ON wr.dog_id = d.dog_id
            JOIN Users u ON d.owner_id = u.user_id
            WHERE wr.status = 'open'
            `);
        res.json(rows);
});


// router.get('/walkers/summary', async (req, res) => {
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