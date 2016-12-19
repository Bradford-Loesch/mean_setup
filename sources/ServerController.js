var mongoose = require('mongoose'),
    *MODELNAME* = mongoose.model('*MODELNAME*');

function *MODELNAME*Controller() {
    this.index = function(req, res) {
        *MODELNAME*.find({}, function(err, *MODELNAME*s) {
            if (err) {
                console.log(err);
            }
            else {
                res.json(*MODELNAME*s);
            }
        });
    }
    this.show = function(req, res) {
        *MODELNAME*.findOne({_id: req.params.id}, function(err, *MODELNAME*) {
            if (err) {
                console.log(err);
            }
            else {
                res.json(*MODELNAME*);
            }
        });
    }
    this.create = function(req, res) {
        var *MODELNAME*Instance = new *MODELNAME*(req.body);
        *MODELNAME*Instance.created = new Date();
        *MODELNAME*Instance.save(function(err){
            if(err){
                console.log(err);
            }
            else {
                console.log("Succesfully saved item");
                res.json({Operation: 'Success'})
            }
        });
    }
    this.update = function(req, res) {
        *MODELNAME*.update({_id: req.params.id}, req.body, function(err){
            if(err){
                console.log(err);
            }
            else {
                console.log("Succesfully updated item");
                res.json({Operation: 'Success'})
            }
        });
    }
    this.delete = function(req, res) {
        *MODELNAME*.remove({_id: req.params.id}, function(err){
            if(err){
                console.log(err);
            }
            else {
                console.log("Succesfully deleted item");
                res.json({Operation: 'Success'})
            }
        })
    }
}

module.exports = new *MODELNAME*Controller();
