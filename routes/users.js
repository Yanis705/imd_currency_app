var express = require('express');
var router = express.Router();

const authController = require('./../controllers/auth')

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

router.post('/signup', (req, res, next)=>{
  //signup
  //username uit req
  //password uit req
  //brypt encrypt
  //databank
})

module.exports = router;
