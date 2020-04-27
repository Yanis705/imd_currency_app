var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'IMDollar | Home' });
});

router.get('/newtransaction', function(req, res, next) {
  res.render('newTransaction', { title: 'IMDollar | New transaction' });
});

router.get('/transactioncompleted', function(req, res, next) {
  res.render('transactionCompleted', { title: 'IMDollar | Transaction completed' });
});

router.get('/transactionhistory', function(req, res, next) {
  res.render('transactionHistory', { title: 'IMDollar | Transaction history' });
});

router.get('/leaderboard', function(req, res, next) {
  res.render('leaderboard', { title: 'IMDollar | Leaderboard' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'IMDollar | Login' });
});

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'IMDollar | Register' });
});

module.exports = router;
