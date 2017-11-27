module.exports = function(sequelize, DataTypes) {
    var Users_groups = sequelize.define("users_groups", {
        user_id: DataTypes.INTEGER,
        group_id: DataTypes.INTEGER,
        vote: DataTypes.INTEGER
    }, {
        timestamps: true
    });

    // Users_groups.associate = function(models) {
    //     Users_groups.hasMany(models.user, {
    //         onDelete: "cascade"
    //     });
    //     Users_groups.hasMany(models.group, {
    //         onDelete: "cascade"
    //     })
    // };

    return Users_groups;
};