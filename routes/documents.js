var express = require("express");
var router = express.Router();
var helpers = require("../helpers/documents");

router.route("/")
    .get(helpers.getDocuments)
    .post(helpers.createDocument);

router.route("/:documentId")
    .get(helpers.getDocument)
    .put(helpers.updateDocument)
    .delete(helpers.deleteDocument);

module.exports = router;