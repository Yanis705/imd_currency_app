const express = require('express');
const router = express.Router();
const transfersController= require('../../../controllers/api/v1/transfers')
const leaderboardController= require('../../../controllers/api/v1/leaderboard')


/* /api/v1/index */
router.get('/transfers', transfersController.getAll);

router.get('/getLatestTransfers', transfersController.getLatestTransfers);

router.get('/transferHistory', transfersController.transferHistory);

router.post('/transfers', transfersController.create);

router.get('/transfers/:id', transfersController.getOne);

router.get('/leaderboard', leaderboardController.getAll);

router.get('/leaderboard/current', leaderboardController.getCurrent);

module.exports = router;