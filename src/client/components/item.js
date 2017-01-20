import React, { PropTypes } from 'react';
import styled from 'styled-components';

export const Area = styled.li`
  list-style: none;
  width: 150px;
  padding: 1em;
  margin: 1em 1em 0 0;
`;

export const TitleItem = ({ name, color }) =>
  <i className={`fa fa-${name} fa-5x`} style={{ color }} aria-hidden="true" />
  ;

TitleItem.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export const Item = ({ item, actions }) => {
  actions.loadedItem(item);
  return (
    <Area>
      <TitleItem name={item.icon} color={item.color} />
    </Area>
  );
};

Item.propTypes = {
  item: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

export default Item;
