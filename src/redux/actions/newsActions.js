import { getDataByCategory } from "../../api";
import { dispatch } from "../store";
import * as t from "../types";

export const setDataByCategory = async (category) => {
  const obj = await getDataByCategory(category);
  if (obj.success) dispatch({ type: t.CATEGORY, payload: obj.data });
};
export const setCategory = (category) => {
  dispatch({ type: t.SET_CATEGORY, payload: category });
};

export const searchDataByCategory = (searchItem) => {
  dispatch({ type: t.SEARCH_ITEM, payload: searchItem });
};
