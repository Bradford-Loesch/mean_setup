
/*
    Routes File

    Tells app to listen for url-routes,
    passes work off to Controllers
*/

module.exports = function (app)
{
    app.get("/items", entries.index);
    app.post("/items", entries.create);
};
