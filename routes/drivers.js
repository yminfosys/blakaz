var express = require('express');
var router = express.Router();

var dotenv=require('dotenv').config();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('driver/driver', { YOUR_API_KEY: process.env.API_KEY });
});

router.get('/bacground', function(req, res, next) {
  res.render('driver/driverBacround', { YOUR_API_KEY: process.env.API_KEY} );
});

module.exports = router;
