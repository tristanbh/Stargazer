module.exports = function(sequelize, Sequelize) {

  var User = sequelize.define('user', {
    id: { autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER},
    email: { type:Sequelize.STRING, validate: {isEmail:true} },
    password : {type: Sequelize.STRING,allowNull: false }, 
    last_login: {type: Sequelize.DATE},
    latitude: {
      type: Sequelize.DECIMAL(10,7),
      allowNull: false,
      defaultValue: 0
    },
    longitude: {
      type: Sequelize.DECIMAL(10,7),
      allowNull: false,
      defaultValue: 0
    },

        status: {type: Sequelize.ENUM('active','inactive'),defaultValue:'active' }

    }, {
            freezeTableName: true,
            timestamps: false
    });

  return User;

}