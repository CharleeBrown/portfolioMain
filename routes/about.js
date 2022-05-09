var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/about', function(req, res, next) {
  console.log("test");
  res.render('about');
  
});

module.exports = router;
