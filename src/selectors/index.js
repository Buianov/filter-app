import { createSelector } from 'reselect';
import { PRODUCTS } from '../constants/entity';

export const getProducts = (state) => state.crud[PRODUCTS];

export const getFilter = (state) => state.filter;

export const getProductsToView = createSelector(
  [getProducts, getFilter],
  (products, filter) => products
    .filter((el) => el.price !== 0) // no zero quantitiy
    .filter((el) => { // price filter
      switch (filter.price) {
        case 'all':
          return true;

        case 'less':
          if (el.price < 5000) {
            return true;
          }
          return false;
        case 'more':
          if (el.price >= 5000) {
            return true;
          }
          return false;
        default:
          return false;
      }
    })
    .filter((el) => !filter.hideArr.includes(el.id)) // hide "deleted" items
    .filter((el) => (filter.cat === '' ? true : filter.cat === el.category.id)) // show category
    .filter((el) => (!filter.onStock ? true : el.quantity > 0)) // onStock flag
  ,
);

export const getCatList = createSelector([getProducts], (prod) => {
  const catList = prod.map((el) => el.category).filter((el) => el && el.title);
  const uniqList = [...new Set(catList.map((el) => el.id))];
  return uniqList.map((el) => catList.find((catEl) => catEl.id === el));
});
