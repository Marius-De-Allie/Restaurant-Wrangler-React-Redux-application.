import restaurants from '../../reducers/restaurants';

describe('resaturants reducer', () => {
    // Test 1 - Reducer's initial execution.
    test('restaurants reducer should initially return default restaurants piece of redux store state when no matching action dispatched', () => {
    
        /* Expected default restaurants state value: 
            {
                {
                    current_page: 1,
                    per_page: 25,
                    restaurants: []
                }
            } 
        */
    
        // Execute restaurants reducer with no action object passed in(Initial execution of reducer).
        const restaurantsState = restaurants(undefined, {type: '@@INIT'});
    
        expect(restaurantsState).toEqual({
                current_page: 1,
                per_page: 25,
                restaurants: []
        })
    });
    
    // Test 2 - restaurant reducer dispatched RETURN_RESTAURANTS action object.
    test('restaurants reducer should return as restaurants piece of redux store state the restaurants object returned by the returnRestaurants action creator', () => {
    
        const restaurantsObj = {
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
                ],
                total_entries: 11
        };
        
        // Execute restaurants reducer passing in RETURN_RESTAURANTS action object.
        const restaurantsState = restaurants(undefined, {
            type: 'RETURN_RESTAURANTS',
            restaurants: restaurantsObj
        })
        // Expected return value from reducer should be restaurants property value of RETURN_RESTAURANTS action object.
        expect(restaurantsState).toEqual(restaurantsObj)
    });
})    


