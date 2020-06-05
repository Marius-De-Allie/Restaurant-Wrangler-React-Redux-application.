# Restaurant Lookup | React-Redux Project

## Table of Contents

- [Introduction](#introduction)
- [Instructions](#instructions)
- [Create React App Info](#Create_React_App_Info)

## Introduction

This is project is a single page web application developed using the React library and the Redux library for application state management, the app was developed to be full to accessible and responsive. Th restaurant lookup app allows the user to search for restaurants by city and presents the users with a maximum of 25 results, where applicable. The use may then further narrow the the search results by filtering the returend list fo restaurants.

## Instructions

### How to start/use the Restaurant lookup React-Redux single page application
- Application URL [Click here to launch Restaurant Lookup App](https://restaurant-lookup.netlify.app/) 
- Application may be downloaded or cloned (`git clone https://github.com/Marius-De-Allie/Restaurant-Wrangler-React-Redux-application`) from [my GitHub repository](https://github.com/Marius-De-Allie/Restaurant-Wrangler-React-Redux-application)
- Once downloaded or cloned via git clone terminal command
- Run `npm install` via terminal, to download all dependencies for the application.
- Run `npm start` via terminal, to launch application's dev server. This will result in a new tab being opened in your default browser and you should be presented with the Restaurant Lookup app Home page.

### How to use Restaurant Lookup React-Redux application.
- On the application's Home Page (url: `https://restaurant-lookup.netlify.app/`) the user will be presented with a search field at the top.
- The user may initiate a new search by entering a city as a search term.
- Once the search fields has been filled in, the serach submit button will becom active, allow the user to initiate the search. 
- The search results (if any) will appear on screen, the app only displays the first 25 restaurants found. 
- The user may narrow down the list of restaurants on screen by entering an additional search term into the filter input filter and hitting the filter button, in order to go back ot the full list of restaurants and remove the filter the user may click the reset filter button next to teh filter text field.
- The user may click on the make a reservation button at the bottom of each restaurant card in the results to be taken to opentable's reservation page for that particulkar restaurant.


## Create_React_App_Info
    
    This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify