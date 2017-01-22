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

const Spin = () => <i className="fa fa-spinner fa-spin fa-3x fa-fw" />;

export const Item = ({ item }) => {
  return (
    <Area>
      {
      item.icon && item.color
      ? <TitleItem name={item.icon} color={item.color} />
      : <Spin />
    }
    </Area>
  );
};

Item.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Item;
