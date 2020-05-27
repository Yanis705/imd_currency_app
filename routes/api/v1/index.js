const express = require('express');
const router = express.Router();
const transfersController= require('../../../controllers/api/v1/transfers')
const leaderboardController= require('../../../controllers/api/v1/leaderboard')
const webhooksController = require('../../../controllers/api/v1/webhooks')

/* /api/v1/index */
router.get('/transfers', transfersController.getAll);

router.get('/getLatestTransfers', transfersController.getLatestTransfers);

router.get('/transferHistory', transfersController.transferHistory);

router.post('/transfers', transfersController.create);

router.get('/transfers/:id', transfersController.getOne);

router.get('/leaderboard', leaderboardController.getAll);

router.get('/leaderboard/current', leaderboardController.getCurrent);

router.put('/leaderboard' , leaderboardController.updateBalance);

router.get('/webhooks', webhooksController.getWebhook);

router.post('/webhooks', webhooksController.createWebhook);

module.exports = router;