const express = require('express');
const router = express.Router();

/* /api/v1/index */
router.get('/', function (req, res, next) {
    res.json({
        "status": "success",
        "data": {
            "Message": "Welcome to the IMDollar API!"
        }
    })
});

router.post('/', function (req, res, next) {
    res.json({
        "status": "success",
        "data": {
            "Message": "Welcome to the IMDollar API!"
        }
    })
});

module.exports = router;