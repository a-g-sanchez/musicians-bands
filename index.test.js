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
        console.log(newBand)
        expect(newBand).toBeInstanceOf(Band);
    })

    test('can create a Musician', async () => {
        // TODO - test creating a musician
        expect('NO TEST').toBe('EXPECTED VALUE HERE');
    })

    test('can update a Band', async () => {
        // TODO - test updating a band
        let band1 = await Band.create({name:'Maroon5', genre:'Rock'});
        await band1.update({genre: 'Pop'})
        expect(band1.genre).toBe('Pop');
    })

    test('can update a Musician', async () => {
        // TODO - test updating a musician
        expect('NO TEST').toBe('EXPECTED VALUE HERE');
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
        // TODO - test deleting a musician
        expect('NO TEST').toBe('EXPECTED VALUE HERE');
    })
})