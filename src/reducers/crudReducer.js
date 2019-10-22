import { FETCH_DATA_START, FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS } from '../constants/actionTypes';
import { PRODUCTS } from '../constants/entity';

export const initialState = {
  isError: false, error: '', loading: false, [PRODUCTS]: [],
};

const newsReducer = (state = initialState, {
  type, error, data, entity,
}) => {
  switch (type) {
    case FETCH_DATA_START: {
      return {
        ...state,
        loading: true,
      };
    }
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        [entity]: data,
        error: '',
        isError: false,
        loading: false,
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state, error, isError: true, loading: false,
      };
    default:
      return state;
  }
};

export default newsReducer;
