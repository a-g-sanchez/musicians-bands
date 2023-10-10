const {Sequelize, db, DataTypes, Model} = require('../db');

// TODO - define the Band model
let Band = db.define("Band", {
    name: DataTypes.STRING,
    genre: DataTypes.STRING,
    showCount: DataTypes.INTEGER
});

module.exports = {
    Band
};