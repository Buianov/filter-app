import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { Container } from './index.style';

const Filter = ({ dispatchFilter, categories }) => {
  const blankFilter = {
    price: 'all',
    cat: '',
    onStock: false,
    hideArr: [],
  };

  const [filter, setFilter] = useState(blankFilter);

  const handlePrice = (e) => {
    setFilter({ ...filter, price: e.target.value });
  };

  const handleCategory = (e) => {
    setFilter({ ...filter, cat: e.target.value });
  };

  const handleOnStock = () => {
    setFilter({ ...filter, onStock: !filter.onStock });
  };

  const applyFilter = () => {
    dispatchFilter(filter);
  };

  const resetFilter = () => {
    setFilter(blankFilter);
    dispatchFilter(blankFilter);
  };

  return (
    <Container>
      <RadioGroup name="price" value={filter.price} onChange={handlePrice}>
        <FormControlLabel value="all" control={<Radio />} label="Все" />
        <FormControlLabel value="less" control={<Radio />} label="< 5000" />
        <FormControlLabel value="more" control={<Radio />} label=">= 5000" />
      </RadioGroup>
      <Select
        value={filter.cat}
        onChange={handleCategory}
        inputProps={{
          id: 'category',
        }}
        displayEmpty
      >
        <MenuItem value="" key={0}>Все категории</MenuItem>
        {categories.map((el) => <MenuItem value={el.id} key={el.id}>{el.title}</MenuItem>)}
      </Select>
      <FormControlLabel
        control={
          <Checkbox checked={filter.onStock} onChange={handleOnStock} value="onStock" />
        }
        label="В наличии"
      />
      <Button variant="contained" color="primary" onClick={applyFilter}>Применить</Button>
      <Button variant="contained" color="secondary" onClick={resetFilter}>Сбросить</Button>
    </Container>
  );
};

Filter.propTypes = {
  dispatchFilter: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
};

export default Filter;
