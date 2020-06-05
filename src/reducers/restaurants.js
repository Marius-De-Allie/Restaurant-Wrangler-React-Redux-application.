import { RETURN_RESTAURANTS } from '../actions/restaurants';

const defaultValues = {
        current_page: 1,
        per_page: 25,
        restaurants: []
        // total_entries: 0
};

// Reducer.
const restaurants = (state = defaultValues, action) => {
    switch(action.type) {
        case RETURN_RESTAURANTS:
                return {
                    ...state,
                    ...action.restaurants
                }
        default:
            return state;
    }
};

export default restaurants;