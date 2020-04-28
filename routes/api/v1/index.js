const express = require('express');
const router = express.Router();

/* /api/v1/index */
router.get('/transfers', (req, res) => {
    res.json({
        "status": "success",
        "data": {
            "Message": "get all transfers"
        }
    })
});

router.post('/transfers', (req, res) => {
    res.json({
        "status": "success",
        "data": {
            "Message": "post new transfer"
        }
    })
});

router.get('/transfers/:id', (req, res) => {
    res.json({
        "status": "success",
        "data": {
            "Message": "get transfer with id: " + req.params.id
        }
    })
});

router.get('/leaderboard', (req, res) => {
    res.json({
        "status": "success",
        "data": {
            "Message": "Get leaderboard"
        }
    })
});


module.exports = router;