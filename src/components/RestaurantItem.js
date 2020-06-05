import React from 'react';
// Styles.
import '../styles/restaurantItem.css';

const RestaurantItem = ({ restaurant, itemNum }) => {
    return (
        <article  
            className="restaurant ui centered card"
            tabIndex="0"
            aria-label={`restaurant result item number ${itemNum}`}
            role="listitem"
        >
            <div className="image" role="img" aria-label="restaurant image">
                <img src={restaurant.image_url} alt={`${restaurant.name}'s exterior building placeholder`}/>
            </div>
            <section className="content" aria-label="restaurant details">
                <h4 className="name header" tabIndex="0">Name: {restaurant.name}</h4>
                <p tabIndex="0"><span>Address:</span> {restaurant.address}</p>
                <p tabIndex="0" id="city">{restaurant.city}</p>
                <p tabIndex="0" id="p-code">{restaurant.postal_code}</p>
                <p className="price" tabIndex="0"><span>Price:</span> {restaurant.price}</p>
            </section>
            <div className="ui bottom attached button" role="link" aria-label="Make restaurant reservation link" tabIndex="0">
                <a href={restaurant.reserve_url} id="reserve-link" aria-label="Click here to make a reservation" title="Click here to make a reservation" target="_blank">Make reservation</a>
            </div>
        </article>
    )
};

export default RestaurantItem;