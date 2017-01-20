import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import MainApp from './components/App';
import configureStore from './store';
import initialState from './mystate';
// import { loadedItems } from './actions';

console.log('mounting react app ...');  // eslint-disable-line no-console

const store = configureStore(initialState);

// console.log('[init]state: ', initialState);
// console.log('[init]state.items: ', initialState.items);

// store.dispatch(loadedItems(initialState.items));

render(
  <Provider store={store}>
    <MainApp />
  </Provider>,
  document.getElementById('__TODO__'));

export default store;
