/*
    Registers Model for TodoItem
*/

var mongoose = require("mongoose");

var entrySchema = new mongoose.Schema({
    title: String,
    dueDate: Date
}, { timestamps: true });

mongoose.model("entry", entrySchema); 
