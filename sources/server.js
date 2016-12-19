var mongoose = require( 'mongoose' ),
    express  = require( 'express' ),
    bp       = require( 'body-parser' ),
    path     = require( 'path' ),
    database = require('./server/config/mongoose.js'),
    routes_setter = require('./server/config/routes.js'),
    root     = __dirname,
    port     = process.env.PORT || 8000,
    app      = express();

app.use( express.static( path.join( root, 'client' )));
app.use( express.static( path.join( root, 'server' )));
app.use( express.static( path.join( root, 'node_modules' )));
app.use(bp.json());

routes_setter(app);

app.listen( port, function() {
  console.log( `server running on port ${ port }` );
});
