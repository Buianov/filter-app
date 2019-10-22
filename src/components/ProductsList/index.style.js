import styled from 'styled-components';

export const ItemContainer = styled.div`
  display: grid;
  grid-template-areas: "image title"
  "image price"
  "image category";
  grid-template-columns: 50px 1fr;
  margin-bottom: 15px;
  background-color: ${(props) => (props.noStock ? '#ffcdd2' : '#bbdefb')};
  gap: 20px;
`;
export const ItemPrice = styled.div`
  grid-area: price;
`;
export const ItemCategory = styled.div`
  grid-area: category;
  padding-bottom: 10px;
`;
export const ItemImage = styled.div`
 grid-area: image;
 padding: 10px;
`;
export const ItemTitle = styled.h4`
  grid-area: title;
  padding: 0;
  margin: 0;
  padding-top: 10px;
`;
