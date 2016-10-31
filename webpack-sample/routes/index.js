var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/webpacksample', function(req, res, next) {
  res.render('webpack', { title: 'Webpack Sample' });
});

module.exports = router;
