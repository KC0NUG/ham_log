// import { config } from "../../../AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/bluebird";

const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    //
    // This uses the proper sequelize syntax to query for all users
    //
    db.user.findAll({
      attributes: ['user_id','call_sign', 'email','comments','password']
    })
    .then(users => res.json(users))
    .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.user.findAll({
      attributes: ['user_id','call_sign', 'email','comments','password'],
      where: {
        user_id: req.params.id
      },
      limit: 1
    })
    .then(results => res.json(results[0].dataValues))
    .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.user.create({
      call_sign: req.body.call_sign,
      email: req.body.email,
      comments: req.body.comments,
      password: req.body.password
    })
    .then(user => res.json(user))
    .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    // db.User
    //   .findOneAndUpdate({ _id: req.params.id }, req.body)
    //   .then(dbModel => res.json(dbModel))
    //   .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    // db.User
    //   .findById({ _id: req.params.id })
    //   .then(dbModel => dbModel.remove())
    //   .then(dbModel => res.json(dbModel))
    //   .catch(err => res.status(422).json(err));
  }
};
