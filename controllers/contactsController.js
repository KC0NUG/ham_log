// import { config } from "../../../AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/bluebird";

const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    //
    // This uses the proper sequelize syntax to query for all users
    //
    db.contact.findAll({
      attributes: ['contact_id','user_id','contact_call_sign']
    })
    .then(contacts => res.json(contacts))
    .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.contact.findAll({
      attributes: ['contact_id','user_id','contact_call_sign'],
      where: {
        user_id: req.params.id
      },
      // limit: 1
    })
    .then(results => {
      var modifiedResults = [];
        results.forEach(sqlContact => {
        modifiedResults.push(sqlContact.dataValues);
      });
      res.json(modifiedResults);
    })
    // .then(results => res.json(results[0].dataValues))
    .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.contact.create({
      user_id: req.body.user_id,
      contact_call_sign: req.body.contact_call_sign
    })
    .then(contact => res.json(contact))
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
