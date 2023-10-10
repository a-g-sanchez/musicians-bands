const { db } = require('./db');
const { Band, Musician, Song } = require('./index')

describe('Band, Musician, and Song Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await db.sync({ force: true });
    })

    test('can create a Band', async () => {
        let newBand = await Band.create({name: 'Paramore', genre: 'Punk-Rock'});

        expect(newBand).toBeInstanceOf(Band);
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
        expect(allBands.length).toBe(2);
    })

    test('can delete a Musician', async () => {
        let deletedMus = await Musician.destroy({where: {id:1}});
        let allMusicians = await Musician.findAll();
        expect(allMusicians.length).toBe(1);
    })

    test('can delete a Song', async () => {
        let song = await Song.findByPk(1)
        await song.destroy()
        let allSongs = await Song.findAll()
        expect(allSongs.length).toBe(0)
    })
})