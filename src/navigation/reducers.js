import {SET_SELECTED_NAVIGATION_ITEM} from "./actions";

export const bottomNavigationReducer = (state = { index: 0 }, action) => {
  switch (action.type) {
    case SET_SELECTED_NAVIGATION_ITEM:
      return {
        ...state,
        index: action.index
      };
  }

  return state;
};
