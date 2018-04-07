var db = require("../models");


exports.getAbouts = function(req, res){
    db.About.find()
    .then(function(abouts){
        res.json(abouts);
    })
    .catch(function(err){
        res.send(err);
    });
};

// exports.createAbout = function(req,res){
//   db.About.create(req.body)
//   .then(function(newAbout){
//       console.log(newAbout);
//       res.status(201).json(newAbout); 
//   })
//   .catch(function(err){
//       res.send(err);
//   });
// };

exports.getAbout = function(req, res){
   db.About.findById(req.params.aboutId)
   .then(function(foundAbout){
       res.json(foundAbout);
   })
   .catch(function(err){
       res.send(err);
   });
};

exports.updateAbout = function(req, res){
    db.About.findOneAndUpdate({_id: req.params.aboutId}, req.body, {new: true})
    .then(function(newAbout){
        res.json(newAbout);
    })
    .catch(function(err){
        res.send(err);
    });
};

module.exports = exports;