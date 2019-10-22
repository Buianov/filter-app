import { SET_FILTER, HIDE_ITEM } from '../constants/actionTypes';

export const setFilter = (filter) => (dispatch) => {
  dispatch({ type: SET_FILTER, filter });
};

export const hideItem = (id) => (dispatch) => {
  dispatch({ type: HIDE_ITEM, item: id });
};
