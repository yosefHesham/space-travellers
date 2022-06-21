import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rocketsReducer from './rockets';

const rootReducer = combineReducers({
  rockets: rocketsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));
export default store;
