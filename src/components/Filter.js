import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { returnFiltered } from '../actions/filteredRestaurants';
// styles.
import '../styles/filter.css';

const Filter = () => {
    const restaurants = useSelector(state => state.restaurants);
    const filteredRestaurants = useSelector(state => state.filteredRestaurants.data.restaurants);
    const dispatch = useDispatch();

    // Component state.
    const [filterText, setFilterText] = useState('');

    const onFilterChange = (evt) => {
        const filterText = evt.target.value.trimStart();

        setFilterText(filterText);
    };

    const onFilterSubmit = (evt) => {
        // Destructure restaurants piece of redux store state.

        evt.preventDefault();
        const filter = new RegExp(filterText, 'i');
        // 
        const filteredRes = restaurants.restaurants.filter(restaurant => restaurant.name.match(filter) || restaurant.address.match(filter) || 
            restaurant.address.match(filter));

        dispatch(returnFiltered(filteredRes));

        setFilterText(filterText === '' ? filterText : '');

    };

    const onFilterReset = (evt) => {
        evt.preventDefault();
        // Dispatch returnFiltered passing in an empty Array.
        dispatch(returnFiltered([]));
        // clear filter field.
        setFilterText('');
    };

    const renderFilterBtn = () => {
        return filteredRestaurants.length <= 0 ? 
        <input 
            className="filter-btn"
            id="filter-b"
            type="submit"
            value="Refine results"
            disabled={filterText === '' || restaurants.restaurants.length <= 0}
            aria-disabled={filterText === '' || restaurants.restaurants.length <= 0}
            aria-label="Press button to filter  your results"
            name="filter-button"
            style={{backgroundColor: filterText === '' || restaurants.restaurants.length <= 0 ?
                'gray' :  '#F6B521',
                cursor: filterText === '' || restaurants.restaurants.length <= 0 ? 'default' : 'pointer'
            }}
        /> :
        <input
            className="reset-btn"
            id="reset"
            type="submit"
            disabled={filteredRestaurants.length <= 0}
            aria-disabled={filteredRestaurants.length <= 0}
            onClick={onFilterReset}
            aria-label="Press button to reset search filters"
            value="Reset filters"
            name="reset-filter-button"
            style={{backgroundColor: filteredRestaurants.length <= 0 ? 'gray' : 'red',
                cursor: filteredRestaurants.length <= 0 ? 'default' : 'pointer'
            }}
        />
    };

    return (
        <section aria-label="filter results">
            <form 
                onSubmit={onFilterSubmit}
                role="search"
                className="ui form"
            >
                <section className="inline field" aria-label="Restaurant results filter input field">
                    <label style={{display: 'block'}} htmlFor="filter" tabIndex="0">
                        Enter search term to filter results
                    </label>
                    <input 
                        type="text"
                        value={filterText}
                        onChange={onFilterChange}
                        placeholder="filter by..."
                        id="filter"
                        name="filter results"
                    />
                    {renderFilterBtn()}
                </section>
            </form>
        </section>
    );
};

export default Filter;

