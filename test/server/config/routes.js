var tests = require('../controllers/tests.js');

module.exports = function(app) {
  app.get('/', function(req, res) {
    res.render('index');
  });
};
