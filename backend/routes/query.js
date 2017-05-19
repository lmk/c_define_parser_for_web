var express = require('express');
var fs = require('fs');
var router = express.Router();
const path = require('path');

var PARSER_PATH = path.format({dir: __dirname + path.sep + "..", base: "error.py"});
var spawn = require("child_process").spawn;

function onQuery(req, res, next) {

//    console.log('request data', req.body['query-list']);

    var result = [];
    var procCount = 0;

    // read config
    fs.readFile(__dirname + '/../config.json', 'utf-8', (err, data)=>{

        if (err != null)
        {
            console.log('[ERROR] config file read fail: ' + __dirname + '/../config.json', err);
            return;
        }

        // change absolute path
        var jsonConfig = JSON.parse(data)
        for(var i in jsonConfig.list) {
            var configItem = jsonConfig.list[i];
            for(var j in configItem.files) {
                configItem.files[j] = path.format({dir: __dirname + path.sep + ".." + path.sep, base: configItem.files[j]});
            }
        }

        // checked id list in webpage
        for(var i in req.body['query-list']) {
            var queryId = req.body['query-list'][i];

            // config list
            for(var j in jsonConfig.list) {
                var configItem = jsonConfig.list[j];

                // console.log('queryId', queryId);
                // console.log('configItem', configItem);

                // if same id then run python error code parser
                if (queryId == configItem.id) {

                    procCount++;

                    var param = {'code': req.body['code'], 'title': configItem.title, 'files': configItem.files};
                    var process = spawn('python', [PARSER_PATH]);

                    process.stdout.on('data', (data)=>{
                        //console.log("DATA", data.toString());
                        result.push(JSON.parse(data.toString()));
                    });

                    process.stdout.on('end', ()=>{
                        procCount--;
                        if ( procCount <= 0) {
                            //console.log("RESULT", result);
                            res.writeHead(200, {"Content-Type": "application/json"});
                            res.end(JSON.stringify(result));
                        }
                    });

                    //console.log("PARAM", param)
                    process.stdin.write(JSON.stringify(param));
                    process.stdin.end();
                }
            }
        }

    });
}

/* GET query listing. */
router.post('/', onQuery);
router.get('/', onQuery);

module.exports = router;