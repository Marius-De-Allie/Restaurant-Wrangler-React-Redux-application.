import filteredRestaurants from '../../reducers/filteredRestaurants';

describe('filteredRestaurants reducer', () => {

    /* Expected default filteredRestaurants state value.
        {
            data: {
                current_page: 1,
                per_page: 25,
                restaurants: []
            }
        }
    */

    // Test 1 -
    test('filteredRestaurants reducer should initially return default filteredRestaurants piece of redux store state when no matching action dispatched', () => {
    
        const filteredRestaurantsState = filteredRestaurants(undefined, {type: '@@INIT'});
    
        expect(filteredRestaurantsState).toEqual({
            data: {
                current_page: 1,
                per_page: 25,
                restaurants: []
            }
        })
    });
    
    test('filteredRestaurants reducer should return as filteredRestaurants piece of redux store state the filteredRestaurants array returned by the RETURN_FILTERED action creator', () => {
    
        const currentState = {
            data: {
                current_page: 1,
                per_page: 25,
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
            }
        }
    
        const filteredArray = [
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
    
        const state = filteredRestaurants(currentState, {
            type: 'RETURN_FILTERED',
            filteredRestaurants: [...filteredArray]
        });
    
        expect(state).toEqual({
            data: {
                current_page: 1,
                per_page: 25,
                restaurants: [...filteredArray]
            }
        })
    });
});    

