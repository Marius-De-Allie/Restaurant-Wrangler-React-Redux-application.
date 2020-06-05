import React, { useState }  from 'react';
import { useDispatch } from 'react-redux';
import handleReturnedRestaurants from '../actions/restaurants';
import { returnFiltered } from '../actions/filteredRestaurants';
import '../styles/search.css';

const Search = (props) => {

    const dispatch = useDispatch();
    // Component state.
    const [searchTerm, setSearchTerm] = useState('');

    const onSearchUpdate = (evt) => {
        const searchTerm = evt.target.value.trimStart();
        console.log(searchTerm)
        setSearchTerm(searchTerm)
    };

    const onSearchSubmit = (evt) => {
        evt.preventDefault();
        // Dispatch async action handleReturnedRestaurants passing in searchTerm as arg.
        dispatch(handleReturnedRestaurants(searchTerm));
        // Clear search input field.
        setSearchTerm('');
        // Dispatch returnFiltered passing in an empty Array.
        dispatch(returnFiltered([]));
        // Display notification message in page heading.
        props.setNotification('Search submitted successfully.')
        setTimeout(() => {
            props.setNotification('')
        }, 5000)
    };

    return (
        <section className="container" aria-label="Restaurant search">
            <form 
                onSubmit={onSearchSubmit}
                role="search"
                className="ui form"
            >
                <section className="inline field" aria-label="Restaurant search input field">
                    <label htmlFor="search" tabIndex="0">
                        Enter City to begin search
                    </label>
                    <input 
                        type="text"
                        value={searchTerm}
                        onChange={onSearchUpdate}
                        placeholder="City..."
                        id="search"
                        aria-required="true"
                        name="city"
                    />
                    <input
                        className="submit-btn"
                        id="submit"
                        type="submit"
                        value="Search"
                        disabled={searchTerm === ''}
                        aria-disabled={searchTerm === ''}
                        aria-label="Press this button to begin your search"
                        name="search-button"
                        style={{
                            cursor: searchTerm === '' ? 'default': 'pointer',
                            backgroundColor: searchTerm === '' ? 'gray' : '#F6B521',
                        }}
                    />
                </section> 
            </form>
        </section>
    );
};

export default Search;

