const { db } = require('./db');
const { Band, Musician, Song } = require('./index')
const bandSeed = require('./seeds/bands.json')
const musicianSeed = require('./seeds/musicians.json')
const songSeed = require('./seeds/songs.json')

describe('Band, Musician, and Song Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await db.sync({ force: true });
        await Band.bulkCreate(bandSeed)
        await Musician.bulkCreate(musicianSeed)
        await Song.bulkCreate(songSeed)
    })

    test('can create a Band', async () => {
        let newBand = await Band.create({name: 'Paramore', genre: 'Punk-Rock'});

        expect(newBand).toBeInstanceOf(Band);
    })

    test('can create a band with a show count', async () => {
        let newBand = await Band.create({name: 'Fall out Boy', genre: 'Punk-Rock', showCount: 3})
        expect(newBand.showCount).toBe(3)
    })

    test('can create a Musician', async () => {
        let newMusician = await Musician.create({name:'ASAP Rocky', instrument: 'voice'});
        expect(newMusician).toBeInstanceOf(Musician);
    })

    test('can create a Song', async () => {
        let newSong = await Song.create({title: 'All Star', year: 1978, length: 1.56})
        expect(newSong).toBeInstanceOf(Song)
    })

    test('can update a Band', async () => {
        // TODO - test updating a band
        let band1 = await Band.create({name:'Maroon5', genre:'Rock'});
        await band1.update({genre: 'Pop'})
        expect(band1.genre).toBe('Pop');
    })

    test('can update a Musician', async () => {
        let musician1 = await Musician.create({name: 'Kendrick', instrument: 'voice'});
        await musician1.update({instrument: 'drums'})
        expect(musician1.instrument).toBe('drums');
    })

    test('can update a Song', async () => {
        let song = await Song.findByPk(1)
        await song.update({year: 1999})
        expect(song.year).toBe(1999)
    })

    test('can delete a Band', async () => {
        // TODO - test deleting a band
        let band2 = await Band.create({name:'All American Rejects', genre:'Punk'});
        let deletedBand = await band2.destroy();
        let allBands = await Band.findAll()
        console.log(allBands)
        expect(allBands.length).toBe(6);
    })

    test('can delete a Musician', async () => {
        let deletedMus = await Musician.destroy({where: {id:1}});
        let allMusicians = await Musician.findAll();
        expect(allMusicians.length).toBe(4);
    })

    test('can delete a Song', async () => {
        let song = await Song.findByPk(1)
        await song.destroy()
        let allSongs = await Song.findAll()
        expect(allSongs.length).toBe(3)
    })

    //Association Tests

    test('Band has musicians, and musicians belong to a band', async()=>{
        //await db.sync({ force: true });
        

        let band = await Band.findByPk(1);
        // let musician1 = await Musician.findByPk(1);
        let musician2 = await Musician.findByPk(2);
        let musician3 = await Musician.findByPk(3);
        console.log(band, musician2);
        await band.addMusicians([musician2, musician3]);
        const bandMusicians = await band.getMusicians();
        expect(bandMusicians.length).toBe(2);
    })
})