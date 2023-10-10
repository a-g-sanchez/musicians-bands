const {Sequelize, db, DataTypes} = require('../db');

// TODO - define the Musician model
const Musician = db.define('Muscian',{
    name: DataTypes.STRING,
    instrument: DataTypes.STRING
});

module.exports = {
    Musician
};