const express = require('express');
const router = express.Router();

/* /api/v1/index */
router.get('/api/v1', (req, res) => {
    res.json({
        "status": "success",
        "data": {
            "Message": "Welcome to the IMDollar API!"
        }
    })
});

router.post('/api/v1', (req, res) => {
    res.json({
        "status": "success",
        "data": {
            "Message": "Welcome to the IMDollar API!"
        }
    })
});

module.exports = router;