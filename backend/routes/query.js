var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET query listing. */
router.get('/query', function(req, res, next) {

    console.log("body ", req.body);

    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(data);
});

module.exports = router;