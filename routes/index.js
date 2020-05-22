var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'IMDollar | Home' });
});

router.get('/profile', function(req, res, next) {
  res.render('profile', { title: 'IMDollar | Profile' });
});

router.get('/transfer', function(req, res, next) {
  res.render('newTransaction', { title: 'IMDollar | New transaction' });
});

router.get('/transactioncompleted', function(req, res, next) {
  res.render('transactionCompleted', { title: 'IMDollar | Transaction completed' });
});

router.get('/transfer/history', function(req, res, next) {
  res.render('transactionHistory', { title: 'IMDollar | Transaction history' });
});

router.get('/transactionDetails/:id', function(req, res, next) {
  res.render('transactionDetails', { title: 'IMDollar | Transaction details', id: req.params.id });
});

router.get('/leaderboard', function(req, res, next) {
  res.render('leaderboard', { title: 'IMDollar | Leaderboard' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'IMDollar | Login' });
});

router.get('/signup', function(req, res, next) {
  res.render('register', { title: 'IMDollar | Register' });
});

module.exports = router;
