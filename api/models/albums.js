var mongoose = require("mongoose");

var AlbumSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    img: {
        type: String
    },
    url: {
        type: String
    },
    caption: {
        type: String
    }
});



var Album = mongoose.model("Album", AlbumSchema);

module.exports = Album;

