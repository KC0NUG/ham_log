module.exports = function(sequelize, DataTypes) {
    var Groups_locations = sequelize.define("groups_locations", {
        group_id: DataTypes.INTEGER,
        location_id: DataTypes.INTEGER,
        votes: DataTypes.INTEGER
    }, {
        timestamps: true
    });

    // Groups_locations.associate = function(models) {
    //     Groups_locations.hasMany(models.group, {
    //         onDelete: "cascade"
    //     });
    //     Groups_locations.hasMany(models.location, {
    //         onDelete: "cascade"
    //     })
    // };

    return Groups_locations;
};