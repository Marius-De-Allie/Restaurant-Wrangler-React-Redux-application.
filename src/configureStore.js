import { createStore } from 'redux';
// Import reducers.
import reducers from './reducers';
// Import middleware.
import middleware from './middleware';

export default createStore(reducers, middleware);