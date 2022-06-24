import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import missionsReducer from './missions/missions';
import reservedRocketsReducer from './rockets/reservedRockets';
import rocketsReducer from './rockets/rockets';

const mainReducer = combineReducers({
  missions: missionsReducer,
  rockets: rocketsReducer,
  reservedRockets: reservedRocketsReducer,
});

const store = createStore(mainReducer, applyMiddleware(thunk, logger));
export default store;
