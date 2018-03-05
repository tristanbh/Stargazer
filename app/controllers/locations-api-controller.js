var db = require("../models");
const Op = db.Sequelize.Op;

module.exports = {
    
    getLocations: function(latRange, lngRange) {
        return db.Locations
        .findAll({
            where: {
                [Op.and]: [ 
                    {latitude: {[Op.between]: latRange}},
                    {longitude: {[Op.between]: lngRange}}
                ]
            }
        });
    },

    addLocation: function(locationData) {
        return db.Locations
        .create(locationData);
    },

    deleteLocation: function(id) {
        return db.Locations
        .destroy(
            {where: {id}}
        );
    }
}

