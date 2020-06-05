import handleReturnedRestaurants, { returnRestaurants  } from '../../actions/restaurants';

describe('Restaurant actions', () => {

    test('returnRestaurants action creator returns correct action object', () => {
        
        const restaurants = [
            {
                id: 1, 
                name: 'First Restaurant', 
                address: '123 place',
                area: 'this area',
                city: 'this City',
                country: 'this country',
                image_url: 'img_url1',
                lat: 1,
                lng: 1,
                mobile_reserve_url: 'mobile_res_url1',
                phone: '1234567890',
                postal_code: "p_code 1",
                price: 1,
                reserver_url: 'res_url1',
                state: 'this state' 
            },
            {
                id: 2, 
                name: 'second Restaurant', 
                address: '456 place',
                area: 'that area',
                city: 'that City',
                country: 'that country',
                image_url: 'img_url2',
                lat: 2,
                lng: 2,
                mobile_reserve_url: 'mobile_res_url2',
                phone: '0987654321',
                postal_code: "p_code 2",
                price: 1,
                reserver_url: 'res_url2',
                state: 'that state' 
            }
        ];
        
        // Call returnRestaurants action creator passing in array of restaurants as arg.
        const action = returnRestaurants(restaurants);
    
        // Action creator returned value should be of format {type: 'RETURNED_RESTAURANTS', restaurants: [...Array of restaurants passed into action creator]}
        expect(action).toEqual({
            type: 'RETURN_RESTAURANTS',
            restaurants: [
                {
                    id: 1, 
                    name: 'First Restaurant', 
                    address: '123 place',
                    area: 'this area',
                    city: 'this City',
                    country: 'this country',
                    image_url: 'img_url1',
                    lat: 1,
                    lng: 1,
                    mobile_reserve_url: 'mobile_res_url1',
                    phone: '1234567890',
                    postal_code: "p_code 1",
                    price: 1,
                    reserver_url: 'res_url1',
                    state: 'this state' 
                },
                {
                    id: 2, 
                    name: 'second Restaurant', 
                    address: '456 place',
                    area: 'that area',
                    city: 'that City',
                    country: 'that country',
                    image_url: 'img_url2',
                    lat: 2,
                    lng: 2,
                    mobile_reserve_url: 'mobile_res_url2',
                    phone: '0987654321',
                    postal_code: "p_code 2",
                    price: 1,
                    reserver_url: 'res_url2',
                    state: 'that state' 
                }
            ]
        });
    });
});   
