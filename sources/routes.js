var CONTROLLERNAME = require('./../controllers/CONTROLLERNAME.js');

module.exports = function(app) {
    app.get('/ROUTENAME', CONTROLLERNAME.index);
    app.get('/ROUTENAME/:id', CONTROLLERNAME.show);
    app.post('/ROUTENAME', CONTROLLERNAME.create);
    app.put('/ROUTENAME/:id', CONTROLLERNAME.update);
    app.delete('/ROUTENAME/:id', CONTROLLERNAME.delete);
}
