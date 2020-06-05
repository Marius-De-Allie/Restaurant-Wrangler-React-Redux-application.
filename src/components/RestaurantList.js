import React from 'react';
import { useSelector } from 'react-redux';
import RestaurantItem from './RestaurantItem';
// Styles.
import '../styles/restaurantList.css';

const RestaurantList = () => {
    const restaurants = useSelector(state => state.restaurants);
    const filteredRestaurants = useSelector(state => state.filteredRestaurants.data.restaurants);
    
    const renderResults = () => {
        return filteredRestaurants.length > 0 ? 
         (
             <section aria-label="filtered restaurant list">
                <h3 className="filtered-results-count">{`Restaurants found: ${filteredRestaurants.length}`}</h3>
                <section 
                        tabIndex="0"
                        aria-label="Filtered list of restaurants"
                        role="list"
                        className="ui stackable raised cards"
                    >
                        {filteredRestaurants.map((restaurant, index) => {
                            return <RestaurantItem 
                                        key={restaurant.id}
                                        restaurant={restaurant}
                                        itemNum={index + 1}
                                    />
                        })}
                    </section>
                </section>
        ) : (
            <section className="list-container" aria-label="empty restaurant list">
                    <h3 style={{textAlign: 'left'}} className="results-count">{`Restaurants found: ${restaurants.restaurants.length}`}</h3>
                    {restaurants.total_entries === 0 ? <h4>Sorry no results for specified city, please try again.</h4> :
                        (
                            <section
                                tabIndex="0"
                                aria-label={`Result list of restaurants located in ${restaurants.restaurants[0].city}`}
                                role="list"
                                className="ui stackable raised cards"
                            >
                                {restaurants.restaurants.map((restaurant, index) => {
                                    return <RestaurantItem 
                                                key={restaurant.id}
                                                restaurant={restaurant}
                                                itemNum={index + 1}
                                            />
                                })}
                            </section>
                        )}
                </section>
        )
    };

    return (
        <section className="list ui segment" aria-label="restaurant results content" tabIndex="0">
            {restaurants.total_entries > 0 && <h2>Your results</h2>}
            {renderResults()}
        </section>
    )
};

export default RestaurantList;