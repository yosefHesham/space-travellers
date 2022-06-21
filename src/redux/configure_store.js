import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import missionsReducer from './missions/missions';

const mainReducer = combineReducers({
  missions: missionsReducer,
});

const store = createStore(mainReducer, applyMiddleware(thunk));
export default store;
