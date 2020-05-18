const express = require('express');
const router = express.Router();
const transfersController= require('../../../controllers/api/v1/transfers')
const leaderboardController= require('../../../controllers/api/v1/leaderboard')
const userController= require('../../../controllers/api/v1/user')

/* /api/v1/index */
router.get('/transfers', transfersController.getAll);

router.post('/transfers', transfersController.create);

router.get('/transfers/:id', transfersController.getOne);

router.get('/leaderboard', leaderboardController.getAll);

router.get('/user', userController.getAll);

router.get('/user/current', userController.getCurrent);


module.exports = router;