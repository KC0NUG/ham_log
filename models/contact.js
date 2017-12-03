"use strict";

const User = require("./user.js");

module.exports = function(sequelize, DataTypes) {
 
var contact = sequelize.define("contact", {
    contact_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true 
    },
    user_id: DataTypes.INTEGER,
    contact_call_sign: DataTypes.STRING,
  }, {
    classMethods: {
        associate: function(modles){
            contact.hasOne(models.user);
        }   
    },
    timestamps: true
  });

    // contact.hasOne(User, { foreignKey: 'user_id'}); 

//    contact.associate = function(models) {
//        contact.hasMany(models.users, {
//        through: "user",
//        onDelete: "cascade"
//   });
 
  return contact;
};