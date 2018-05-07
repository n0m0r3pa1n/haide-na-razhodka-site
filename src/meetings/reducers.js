import {
  FETCH_MEETINGS_FULFILLED,
  SEARCH_MEETINGS_FULFILLED,
  SEARCH_MEETINGS_DATA_IS_SET,
  LOADING_MEETINGS
} from "./actions";
import moment from 'moment';
import _ from 'lodash';

const initialState = {
  list: [],
  fromDate: moment().startOf('day').toDate(),
  toDate: moment().add(30, 'day').startOf('day').toDate(),
  page: 0,
  pages: 1,
  loading: true
};

export const meetingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_MEETINGS:
      return {
        ...state,
        loading: true
      };
    case FETCH_MEETINGS_FULFILLED:
      return {
        ...state,
        list: _.concat(state.list, action.pagination.results),
        page: action.pagination.page,
        pages: action.pagination.pages,
      };
    case SEARCH_MEETINGS_FULFILLED:
      return {
        ...state,
        list: action.pagination.results,
        page: action.pagination.page,
        pages: action.pagination.pages,
        loading: false
      };
    case SEARCH_MEETINGS_DATA_IS_SET:
      return {
        ...state,
        fromDate: action.payload.fromDate,
        toDate: action.payload.toDate
      };
  }

  return state;
};
