var db = require("../models");


exports.getAlbums = function(req, res){
    db.Album.find()
    .then(function(albums){
        res.json(albums);
    })
    .catch(function(err){
        res.send(err);
    });
};

exports.createAlbum = function(req,res){
  db.Album.create(req.body)
  .then(function(newAlbum){
      console.log(newAlbum);
      res.status(201).json(newAlbum); 
  })
  .catch(function(err){
      res.send(err);
  });
};

exports.getAlbum = function(req, res){
   db.Album.findById(req.params.albumId)
   .then(function(foundAlbum){
       res.json(foundAlbum);
   })
   .catch(function(err){
       res.send(err);
   });
};

exports.updateAlbum = function(req, res){
    db.Album.findOneAndUpdate({_id: req.params.albumId}, req.body, {new: true})
    .then(function(newAlbum){
        res.json(newAlbum);
    })
    .catch(function(err){
        res.send(err);
    });
};

exports.deleteAlbum = function(req, res){
   db.Album.remove({_id: req.params.albumId})
   .then(function(){
       res.json({message: "We deleted it!"});
   })
   .catch(function(err){
       res.send(err);
   }); 
};

module.exports = exports;