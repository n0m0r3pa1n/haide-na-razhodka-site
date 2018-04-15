import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {meetingsReducer} from "../meetings/reducers";
import {meetingReducer} from "../details/reducers";

const rootReducer = combineReducers({
  meetings: meetingsReducer,
  routing: routerReducer,
  meeting: meetingReducer
});

export default rootReducer;
