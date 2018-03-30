var express = require("express");
var router = express.Router();
var helpers = require("../helpers/albums");

router.route("/")
    .get(helpers.getAlbums)
    .post(helpers.createAlbum);

router.route("/:albumId")
    .get(helpers.getAlbum)
    .put(helpers.updateAlbum)
    .delete(helpers.deleteAlbum);

module.exports = router;