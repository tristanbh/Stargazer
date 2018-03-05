var db = require("../models");
const Op = db.Sequelize.Op;

module.exports = {
    
    getEvents: function(latRange, lngRange) {  
        return db.Events
        .findAll({
            where: {
                [Op.and]: [ 
                    {latitude: {[Op.between]: latRange}},
                    {longitude: {[Op.between]: lngRange}}
                ]
            }
        });
    },

    addEvent: function(eventData) {
        return db.Events
        .create(eventData);
    },

    deleteEvent: function(id) {
       return db.Events
        .destroy(
            {where: {id}}
        );
    }
}

