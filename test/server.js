var express = require("express");
var app = express();

app.use(require("body-parser").json());

require("./server/config/mongoose.js");

var routes = require("./server/config/routes.js");
routes(app);

app.use(express.static("./client"));
app.use(express.static("./node_modules"));


app.listen(8000, function () {
    console.log("Listening");
});
