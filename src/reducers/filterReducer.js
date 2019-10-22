import { SET_FILTER, HIDE_ITEM } from '../constants/actionTypes';

const initialState = {
  price: 'all',
  cat: '',
  onStock: false,
  hideArr: [],
};

const filterReducer = (state = initialState, { type, filter, item }) => {
  switch (type) {
    case SET_FILTER:
      return { ...state, ...filter };
    case HIDE_ITEM:
      return {
        ...state,
        hideArr: [...state.hideArr, item],
      };
    default:
      return state;
  }
};

export default filterReducer;
