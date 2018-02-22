export const SET_SELECTED_NAVIGATION_ITEM = "set.selected.navigation.item";

export const setSelectedNavigationItem = (index) => {
  console.log(index, "AAAAAAA");
  return ({type: SET_SELECTED_NAVIGATION_ITEM, index}) };
