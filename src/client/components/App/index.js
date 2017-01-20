import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actionList from '../../actions';
import ListItems from '../list_items';

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

export const App = ({ items, actions }) =>
  <Wrapper>
    <Title>Bandit mancho</Title>
    <ListItems items={items} actions={actions} />
  </Wrapper>
;

App.propTypes = {
  items: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actionList, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(App);
