import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// Import custom logger middleware.
import logger from './logger';

// Call applyMiddleware passing in all middleware.
export default applyMiddleware(thunk, logger);