import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {meetingsReducer} from "../meetings/reducers";
import {meetingReducer} from "../details/reducers";
import {userReducer} from "../login/reducers";

const rootReducer = combineReducers({
  meetings: meetingsReducer,
  user: userReducer,
  routing: routerReducer,
  meeting: meetingReducer
});

export default rootReducer;
