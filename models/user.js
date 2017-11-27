"use strict";

module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define("user", {
      user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true // Automatically gets converted to SERIAL for postgres
      },
      call_sign: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      comments: DataTypes.STRING,
      
  }, {
      timestamps: true
  });

  // user.associate = function(models) {
  //     user.hasMany(models.UsersGroupsLocations, {
  //         // through: "UsersGroupsLocations",
  //         onDelete: "cascade"
  //     });
  // };

  return user;
};