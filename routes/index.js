var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* render kiran page */
router.get('/kiran', function(req, res, next) {
    res.render('kiran', { title: 'Kiran' });
});

/* render madhu page */
router.get('/madhu', function(req, res, next) {
    res.render('madhu', { title: 'Madhu' });
});

/* render subha page */
router.get('/subha', function(req, res, next) {
    res.render('subha', { title: 'Subha' });
});

/* render sai page */
router.get('/sai', function(req, res, next) {
    res.render('sai', { title: 'Sai' });
});


module.exports = router;
