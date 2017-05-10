var express = require('express');
var router = express.Router();

console.log("TRACE backend/routes/index.js");

router.get('/', function(req, res, next) {
  console.log("TRACE backend/routes/index.js get /");
  res.render('index');
});

module.exports = router;
