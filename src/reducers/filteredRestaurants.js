import { RETURN_FILTERED } from '../actions/filteredRestaurants';

const defaultValues = {
    data: {
        current_page: 1,
        per_page: 25,
        restaurants: []
        // total_entries: 0
    }
};

// Reducer.
const filteredRestaurants = (state = defaultValues, action) => {
    switch(action.type) {
        case RETURN_FILTERED:
                return {
                    ...state,
                    data: {
                        ...state.data,
                        restaurants: [...action.filteredRestaurants]
                    }
                }
        default:
            return state;
    }
};

export default filteredRestaurants;