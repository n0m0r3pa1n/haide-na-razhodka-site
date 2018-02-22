import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {meetingsReducer} from "../meetings/reducers";
import {bottomNavigationReducer} from "../navigation/reducers";

const rootReducer = combineReducers({
  meetings: meetingsReducer,
  navigation: bottomNavigationReducer,
  routing: routerReducer
});

export default rootReducer;
