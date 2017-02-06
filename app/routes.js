// create new router
const express = require('express'),
  router = express.Router();
  mainController = require('./controllers/main.controller');
  planogramController = require('./controllers/planogram.controller');
  request = require('request');

// export router
module.exports = router; 

const url = 'http://127.0.0.1:5000';

    // main routes hardcoded JSON
    // router.get('/', mainController.showHome );

    // router.get('/json', planogramController.json );

    // router.get('/recentreports', function(req, res, next) {
    //   request(url, function (err, response, body) {
    //     if (err || response.statusCode !== 200) {
    //       return res.sendStatus(500);
    //     }
    //     data = body;
    //     res.render('pages/planogram', { data : JSON.parse(body) });
    //     console.log(data);
    //   });
    // });

// main routes JSON from file. 
router.get('/', planogramController.getData);
