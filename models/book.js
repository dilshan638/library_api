var Sequelize = require('sequelize');
const sequelize = require('../controllers/helpers/dbconnect');

   const book = sequelize.define('book', {
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    name: Sequelize.STRING(150),
    isbn: Sequelize.STRING(150),
    author: Sequelize.INTEGER,
    created_at: Sequelize.DATEONLY
  
}, {
    freezeTableName: true,
    timestamps: false
});



module.exports = book;