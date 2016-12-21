var SCHEMANAMEsCtrl = require('./../controllers/SCHEMANAMEsCtrl.js');

module.exports = function(app) {
    app.get('/VARIABLENAMEs', SCHEMANAMEsCtrl.index);
    app.get('/VARIABLENAMEs/:id', SCHEMANAMEsCtrl.show);
    app.post('/VARIABLENAMEs', SCHEMANAMEsCtrl.create);
    app.put('/VARIABLENAMEs/:id', SCHEMANAMEsCtrl.update);
    app.delete('/VARIABLENAMEs/:id', SCHEMANAMEsCtrl.delete);
}
