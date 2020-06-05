import { combineReducers } from 'redux';
import restaurants from './restaurants';
import filteredRestaurants from './filteredRestaurants';

export default combineReducers({
    restaurants,
    filteredRestaurants
})