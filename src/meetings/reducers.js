import {FETCH_MEETINGS_FULFILLED, SEARCH_MEETINGS_DATA_IS_SET} from "./actions";
import moment from 'moment';

const initialState = {
  list: [],
  fromDate: moment().startOf('day').toDate(),
  toDate: moment().add(30, 'day').startOf('day').toDate()
};

export const meetingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MEETINGS_FULFILLED:
      return {
        ...state,
        list: action.pagination.results,
        currentPage: action.pagination.page,
        pages: action.pagination.totalPages
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
