var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tests');

//requires every model
require('../models/test.js');
