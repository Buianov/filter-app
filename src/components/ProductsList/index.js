import React from 'react';

import {
  ItemContainer, ItemPrice, ItemCategory, ItemImage, ItemTitle,
} from './index.style';

const ProductsList = ({ products, removeCard }) => products.map((el) => {
  const {
    id, title, image, price, quantity, category: { title: catTitle },
  } = el;
  return (
    <ItemContainer key={id} onClick={removeCard(id)} noStock={quantity === 0}>
      <ItemTitle>Наименование: {title}</ItemTitle>
      <ItemImage><img src={image} alt={title} /></ItemImage>
      <ItemPrice>Цена: {price} руб.</ItemPrice>
      <ItemCategory>Категория: {catTitle}</ItemCategory>
    </ItemContainer>
  );
});

export default ProductsList;
