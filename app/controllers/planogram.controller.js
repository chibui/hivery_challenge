// Urls for App Center REST functions
const url = 'http://127.0.0.1:5000';

// module.exports = {
//  // show the home page
//   showPlanogram: (req, res) => {
//     res.render('pages/planogram');
//   },
//   json: (req, res) => {
//     request({
//       url: url,
//       json: true
//     }, function (error, response, body) {
//       if (!error && response.statusCode === 200) {
//         res.send(body);
//       }
//     });
//   }
// }

module.exports = {
  getData: getData
}
 
function getData(req, res, next) {
  request(url, function (err, response, body) {
    if (err || response.statusCode !== 200) {
      return res.sendStatus(500);
    }
    data = body;
    res.render('pages/home', { title: 'Chi\'s Hivery', data : JSON.parse(body) });
  });
}
