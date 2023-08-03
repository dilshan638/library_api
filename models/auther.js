var Sequelize = require('sequelize');
const sequelize = require('../controllers/helpers/dbconnect');

   const auther = sequelize.define('auther', {
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    first_name: Sequelize.STRING(150),
    last_name: Sequelize.STRING(150),
    created_at: Sequelize.DATEONLY
  
}, {
    freezeTableName: true,
    timestamps: false
});



module.exports = auther;