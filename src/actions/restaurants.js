import getRestaurants from '../services/api';

// Declare RETURN_RESTAURANTS action type property.
const RETURN_RESTAURANTS = 'RETURN_RESTAURANTS';

// RETURN REUSTAURANTS ACTION CREATOR.
const returnRestaurants = (restaurants) => ({
    type: RETURN_RESTAURANTS,
    restaurants
});

// HANDLE RETURN RESTAURANTS THUNK ASYNC ACTION CREATOR.
const handleReturnedRestaurants = (searchTerm) => {
    return async (dispatch) => {
            const result = await getRestaurants(searchTerm)
            dispatch(returnRestaurants(result))
    };
} 

export {handleReturnedRestaurants as default, returnRestaurants, RETURN_RESTAURANTS};