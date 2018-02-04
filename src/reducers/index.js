import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {meetingsReducer} from "../meetings/reducers";

const rootReducer = combineReducers({
  meetingsReducer,
  routing: routerReducer
});

export default rootReducer;
