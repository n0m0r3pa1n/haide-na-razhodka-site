import {FETCH_MEETINGS_FULFILLED} from "./actions";

export const meetingsReducer = (state = {list: []}, action) => {
  switch (action.type) {
    case FETCH_MEETINGS_FULFILLED:
      return {
        ...state,
        list: action.pagination.results,
        currentPage: action.pagination.page,
        pages: action.pagination.totalPages
      };
  }

  return state;
};
