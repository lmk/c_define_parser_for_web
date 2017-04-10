var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  fs.readFile(__dirname + '/../config.json', 'utf-8', (err, data)=>{
    if (err != null)
    {
      console.log('[ERROR] config file read fail: ' + __dirname + '/../config.json', err);
      return;
    }

    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(data);
  });

});

module.exports = router;
