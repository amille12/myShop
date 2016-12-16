var Product = require('../models/product');
var mongoose = require('mongoose');

module.exports = {
  index: function(req, res, next) {
    Product
    .find({})
    .exec(function (err, result) {
      if (err) return err;
      res.status(200).json(result);
    });
  },

  show: function(req, res, next) {
    Product
    .findById(req.params.id)
    .exec(function (err, result) {
      if (err) return next (err);
      res.status(200).json(result);
    });
  },

  create: function(req, res, next) {
    Product
      .create(req.body, function(err, result) {
        if (err) return next (err);
        res.status(200).json(result);
      });
  },

  update: function(req, res, next) {
    Product.findOneAndUpdate(
      { _id: mongoose.Types.ObjectId(req.params.id) },
        req.body,
        { new: true },
        function(err, result) {
          if (err) return next (err);
          res.status(200).json(result);
        }
    );
  },

  destroy: function(req, res, next) {
    Product.findByIdAndRemove(req.params.id, function(err, result) {
      if (err) return next (err);
      res.status(200).json(result);
    });
  }


};
