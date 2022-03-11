import * as t from "../types";

const initialState = {
  // getCategories:[],
  getDataByCategory: [],
  searchItem: [],
};

const newsReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case t.CATEGORY:
      return { ...state, getDataByCategory: action, searchItem: [] };
    case t.SEARCH_ITEM:
      return { ...state, searchItem: action };
    default:
      return state;
  }
};

export default newsReducer;
