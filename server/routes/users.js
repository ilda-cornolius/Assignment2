//   users.js
//  Ildaphonse Cornolius
//  ID: 300699371
//  Date: October 30, 2022
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Placeholder');
});

module.exports = router;
