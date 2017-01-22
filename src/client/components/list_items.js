import React, { PropTypes } from 'react';
import styled from 'styled-components';
import CurrItem from './item';

export const ItemContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  padding: 0;
  margin: 0;
`;

const ListItems = ({ items }) =>
  <ItemContainer>
    {
      items.map(item => <CurrItem item={item} key={item.id} />)
    }
  </ItemContainer>
;

ListItems.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ListItems;
