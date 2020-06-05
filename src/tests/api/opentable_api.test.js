import supertest from 'supertest';

describe('Opentable api', () => {
    const api = supertest('https://opentable.herokuapp.com')
    
    test('Correctly formatted data is returned when valid get request is made to endpoint', async () => {
    
        await api
        .get('/api/restaurants?city=toronto')
        .expect(200)
        .expect('Content-Type', /application\/json/)
    
    });

    test('data is returned when valid get request is made to endpoint', async () => {
    
        const response = await api.get('/api/restaurants?city=toronto');
        expect(response.body.restaurants).toHaveLength(25);
    });

});