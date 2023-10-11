const {Sequelize, db, DataTypes, Model} = require('../db');

const Manager = db.define("Manager", {
    name: DataTypes.STRING,
    email: DataTypes.STRING, 
    salary: DataTypes.INTEGER, 
    dateHired: DataTypes.DATEONLY
});

module.exports = {
    Manager
}