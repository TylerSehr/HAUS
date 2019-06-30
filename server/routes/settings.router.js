const express = require('express');
const pool = require('../modules/pool')

const router = express.Router()

router.post('/update', (req, res) => {
    const s = req.body
    pool.query(`UPDATE person 
        SET (region, roommating, max_price, email_message) = ($1, $2, $3, $4) 
        WHERE fb_id = $5;`, [s.region, s.roommating, s.max_price, s.email_message, s.id])
        .then(results => {
            res.send(results.rows)
        })
        .catch(error => {
            console.log(error);
        })
})

router.post('/get', (req, res) => {
    pool.query(`SELECT region, saved, roommating, max_price, email_message
        FROM person
        WHERE $1 = fb_id;`, [req.body.id])
        .then(result => {
            res.send(result.rows)
        })
        .catch(error => {
            console.log(error);
        })
})


module.exports = router;