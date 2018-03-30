var mongoose = require("mongoose");

var AboutSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    img: {
        type: String,
        required:true
    },
    content: {
        type: String,
        required: true
    }
});



var About = mongoose.model("About", AboutSchema);

module.exports = About;

