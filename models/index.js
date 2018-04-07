var mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.connect(process.env.MONGOURL);

mongoose.Promise = Promise;

module.exports.Post = require("./post");
module.exports.User = require("./user");
module.exports.Album = require("./albums");
module.exports.About = require("./about");
module.exports.Document = require("./documents");