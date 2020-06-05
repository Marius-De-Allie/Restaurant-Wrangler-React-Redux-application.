// Declare RETURN_RESTAURANTS action type property.
const RETURN_FILTERED = 'RETURN_FILTERED';

// RETURN FILETERED REUSTAURANTS ACTION CREATOR.
const returnFiltered = (filteredRestaurants) => ({
    type: RETURN_FILTERED,
    filteredRestaurants
});

export {RETURN_FILTERED, returnFiltered};