import React, { useState, Fragment } from 'react';
import { useSelector } from 'react-redux';
import Search from './components/Search';
import RestaurantList from './components/RestaurantList';
import Filter from './components/Filter';
import Header from './components/Header';
// Stylesheet
import './styles/app.css';

const App = (props) => {
  const [notifcationMsg, setNotificationMsg] = useState('');
  const restaurants = useSelector(state => state.restaurants)

  const renderNotif = () => {
    if(notifcationMsg !== '') {
      return notifcationMsg;
    } else {
      // do nothing.
    }
  };
    
  return (
    <Fragment>
      <Header />
      <main className="app ui container" id="main-container">
        <section className="search-container ui segment" aria-label="Search and filter inputs">
          <Search setNotification={setNotificationMsg} />
          <Filter setNotification={setNotificationMsg} />
        </section>
        {renderNotif()}
        {restaurants.total_entries !== undefined ? <RestaurantList /> :
          <h2 className="ui header ui segment">Please enter a city in the search bar above to begin.</h2>
        }
      </main>
    </Fragment>
    );
};

export default App;
