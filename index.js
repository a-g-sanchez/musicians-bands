const { Band } = require('./models/Band')
const { Musician } = require('./models/Musician')
const { Song } = require("./models/Song")
const { Manager } = require("./models/Manager")
// Define associations here

//Band has many musicians 
//Musician belongs to a Band 
Band.hasMany(Musician);
Musician.belongsTo(Band);

//Band has many songs 
//Song has many bands (think jazz standards/covers)
Band.belongsToMany(Song, {through: "song-band"});
Song.belongsToMany(Band, {through: "song-band"});




module.exports = {
    Band,
    Musician,
    Song, 
    Manager
};
