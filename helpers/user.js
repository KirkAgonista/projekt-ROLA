var db = require("../models");

exports.getUsers = function(req, res){
    db.User.find()
    .then(function(users){
        res.json(users);
    })
    .catch(function(err){
        res.send(err);
    });
};

exports.createUser = function(req,res){
   db.User.create(req.body)
   .then(function(newUser){
      res.status(201).json(newUser); 
   })
   .catch(function(err){
       res.send(err);
   });
};

exports.getUser = function(req, res){
   db.User.findById(req.params.userId)
   .then(function(foundUser){
       res.json(foundUser);
   })
   .catch(function(err){
       res.send(err);
   });
};

module.exports = exports;