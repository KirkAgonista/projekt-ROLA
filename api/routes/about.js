var express = require("express");
var router = express.Router();
var helpers = require("../helpers/about");

router.route("/")
    .get(helpers.getAbouts);
    // .post(helpers.createAbout);

router.route("/:aboutId")
    .get(helpers.getAbout)
    .put(helpers.updateAbout);

module.exports = router;