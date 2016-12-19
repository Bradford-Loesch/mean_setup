var mongoose = require("mongoose");

var SCHEMANAMESchema = new mongoose.Schema({
    name: String,
}, { timestamps: true });

mongoose.model("SCHEMANAME", SCHEMANAMESchema);
