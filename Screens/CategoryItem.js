import React from 'react';
import styled from 'styled-components';

const ItemContainer = styled.div`
  padding: 10px;
  border-bottom: 1px solid #e0e0e0;
`;

const CategoryItem = ({ name }) => (
  <ItemContainer>{name}</ItemContainer>
);

export default CategoryItem;
