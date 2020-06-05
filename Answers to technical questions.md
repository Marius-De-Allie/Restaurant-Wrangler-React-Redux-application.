### How long did you spend on the coding assignment? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.
- I spent approximately 6 hours on the assignment. There are several things I would have added to the app if I had more time, such as:
 - Add pagination to the app, allowing multiple pages of results (where available) instead of just rendering the first page of results (maximum of 25 restaurants).
 - Add added react router to handle complex app routing needs and would have added a more detailed restaurant info page for each restaurant, that the user could navigate to via a route that had dynamic param.
 - Add a nav bar so that it would be easy to traverse the app between detailed restaurant info, search results and the homepage.
 - In order to have data persistence in the app I would have used the localStorage web API to persist redux store data or maybe do a database along with a Node and express backend.
 - Finally I would have written a more detailed README for the project if time was on my side.

### What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

- One of the most useful, recent features added to the React library is React hooks, allowing the use of component state and life cycle methods in functional components without the need for class based components, hooks have also been adopted by the react-redux library, which allows components to gain access to redux store state and to dispatch actions without the need for react-redux library's connect function, by using the react0redux's useDispatch and useSelector hooks. I opted to utilize three of the redux hooks mentioned above during this project (useState, useDispatch and useSelector). Additionaly you now have the ability to even declare your own custom hooks in react 16.8 and newer, if non eof teh built in hooks meet your specific needs.
I have included a few code snippets from the project demonstrating my use of said react hooks.

### React useState Hook.

```
  import React, { useState } from 'react';
  import { connect } from 'react-redux';
  import { returnFiltered } from '../actions/filteredRestaurants';
  // styles.
  import '../styles/filter.css';

  const Filter = (props) => {

      // Component state.
      const [filterText, setFilterText] = useState('');
```
### React-redux  useDispatch Hook.

```
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

```
### React-redux  useSelector Hook.

```
 const RestaurantList = () => {
    const restaurants = useSelector(state => state.restaurants);
    const filteredRestaurants = useSelector(state => state.filteredRestaurants.data.restaurants);

```

### How would you track down a performance issue in production? Have you ever had to do this?

- I would start from the basics and experience the app/site from the user's perspective, utilizing the google chrome browser dev tools to access the site and see what kind of response times I am noticing in the network section of the dev tools to have resources retreived from the server, aslo by doing this we may notice instances where the app is excessively sending request to the server, in cases where it probably could be doing client side renderer to aid in perfomance. Also it would be worthwhile to test a non in production version (e.g. clone project's repo to local workstation) of the app/locally if possibly, to pinpoint whether the issues are a result of the code not being performant or the issue is more network related. Alos for REST api transdactions I would utilize tools such as postman or visual studio code's REST client to to perform http request (GET, POST, PUT, DELETE, etc) to the server/api endpoints in question to isolate the RESTFUl transaction performace from the local application code performance. Additionally one can employes testing libraries such as cypress to perform end to end tests within the app to see how the app performs overall as a complete solution, not just focusing on singular aspects of performance in isolation and negelecting other's. By testing in this manner we can get a more complete picture of how teh app performances for end users.

### How would you improve the API that you just used?

- The fact that the api returns the same data structure regardless of whether you have any actual results or not is not optimal in my opinion, I would prefer if your response's data structure was somewhat different if you had no results, this could prove to be beneficial when checking the status of the api response “data” in certain scenarios, for instance if comparing the structure of the returned data to your app’s initial redux store state. I feel that the api should return a different status code instead of 200 for http GET request that return no results, as you get the same status code for GET requests that return resulst and one's that do not, which I beleif is not the best.Other than that I found the api very goood to work with actually, performs well and the returned data's structure is fairly flat and the relevant data (restaurant list info) is not too deeply nested within the response body.

### Please describe yourself using JSON.
- I use JSON frequently as do most developers who make frequent api requests and work with RESTFUL api, as JSON is in most cases the file format of choice for transfer of textual data between different systems and platforms. I enjoy working with JSON aslo because of it's similarity JavaScript object literal notation, which I work with great deal as developer who's primary language is JavaScript. The other ting that is really good about JSON for me as front end developer, is how quickly and easily I am able to parse JSON data to and from regular JavaScript objects with methods such as JSON.parse(), JSON.stringify and .json().
