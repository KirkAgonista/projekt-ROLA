var mongoose = require("mongoose");

var PostSchema = new mongoose.Schema({
    titlePost: {
        type: String,
        required: true
    },
    id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    date: {
        type: String,
        required: true
    },
    author: {
        type: String,
        default: "DW"
    },
    contentPost: {
        type: String,
        required: true
    },
    imagePath: Array,
});



var Post = mongoose.model("Post", PostSchema);

module.exports = Post;

