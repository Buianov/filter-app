import { FETCH_DATA_START, FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS } from '../constants/actionTypes';
import { PRODUCTS } from '../constants/entity';
import { fetch } from '../helpers/rest';

export const getProducts = () => async (dispatch) => {
  dispatch({ type: FETCH_DATA_START });

  try {
    const res = await fetch(PRODUCTS);
    dispatch({ type: FETCH_DATA_SUCCESS, data: res.data.data, entity: PRODUCTS });
  } catch (err) {
    dispatch({ type: FETCH_DATA_FAILURE, error: err });
  }
};
