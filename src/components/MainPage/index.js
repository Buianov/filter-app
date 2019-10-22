import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Container } from './index.style';
import { getProducts } from '../../actions/crudAction';
import { setFilter, hideItem } from '../../actions/filterAction';
import ProductsList from '../ProductsList';
import Filter from '../Filter';
import { getProductsToView, getCatList } from '../../selectors';

const MainPage = ({
  products, isLoading, getProductsList, filter, dispatchFilter, dispatchHide, categoriesList,
}) => {
  useEffect(() => {
    getProductsList();
  }, []);

  const handleRemove = (id) => () => {
    dispatchHide(id);
  };

  return (
    <Container>

      {isLoading ? <CircularProgress size={30} />
        : (
          <>
            <Filter
              dispatchFilter={dispatchFilter}
              categories={categoriesList}
              preset={filter}
            />
            <div><ProductsList products={products} removeCard={handleRemove} /></div>
          </>
        )}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.crud.loading,
  filter: state.filter,
  products: getProductsToView(state),
  categoriesList: getCatList(state),
});

const mapDispatchToProps = {
  getProductsList: getProducts,
  dispatchFilter: setFilter,
  dispatchHide: hideItem,
};

MainPage.defaultProps = {
  products: [],
  categoriesList: [],
};

MainPage.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    image: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.number,
    category: PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
    }),
  })),
  getProductsList: PropTypes.func.isRequired,
  filter: PropTypes.object.isRequired,
  dispatchFilter: PropTypes.func.isRequired,
  dispatchHide: PropTypes.func.isRequired,
  categoriesList: PropTypes.array,

};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
