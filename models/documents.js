var mongoose = require("mongoose");

var documentSchema = new mongoose.Schema({
    name: String,
    url: String
});

var Document = mongoose.model("Document", documentSchema);

module.exports = Document;

