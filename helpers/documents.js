var db = require("../models");

exports.getDocuments = function(req, res){
    db.Document.find()
    .then(function(documents){
        res.json(documents);
    })
    .catch(function(err){
        res.send(err);
    });
};

exports.createDocument = function(req,res){
   db.Document.create(req.body)
   .then(function(newDocument){
      res.status(201).json(newDocument); 
   })
   .catch(function(err){
       res.send(err);
   });
};

exports.getDocument = function(req, res){
   db.Document.findById(req.params.documentId)
   .then(function(foundDocument){
       res.json(foundDocument);
   })
   .catch(function(err){
       res.send(err);
   });
};

exports.updateDocument = function(req, res){
    db.Document.findOneAndUpdate({_id: req.params.documentId}, req.body, {new: true})
    .then(function(newDocument){
        res.json(newDocument);
    })
    .catch(function(err){
        res.send(err);
    });
};

exports.deleteDocument = function(req, res){
   db.Document.remove({_id: req.params.documentId})
   .then(function(){
       res.json({message: "We deleted it!"});
   })
   .catch(function(err){
       res.send(err);
   }); 
};

module.exports = exports;