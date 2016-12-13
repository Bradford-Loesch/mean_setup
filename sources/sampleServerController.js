/*
    TodoItems Controller File

    Listens to requests,
    Asks models to c.r.u.d. data from DB
    Responds to client
*/

var mongoose = require("mongoose");
var Entry = mongoose.model("entry");  // Getting

module.exports = {

    index: function (req, res){
        Entry.find({}, function (err, items) {
            res.json({ items: items });
        });
    },

    create: function (req, res){
      var item = new Entry({
          title: req.body.title,
          dueDate: req.body.dueDate
      });
      item.save(function (err) {
          if (err) {
              console.log(err);
          } else {
              console.log("Successfully Saved:", item);
          }
          res.json({ item: item });
      });
    }//,

    // other CRUD operations go here

};
