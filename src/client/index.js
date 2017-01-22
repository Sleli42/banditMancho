import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import MainApp from './components/App';
import configureStore from './store';
// import initialState from './mystate';
import { loadItems } from './actions';

console.log('mounting react app ...');  // eslint-disable-line no-console

const setState = (itemsCounter) => {
  const items = [];
  let id = 0;
  for (id; id < itemsCounter; id += 1) {
    items.push({ id, name: '', color: '' });
  }
  return items;
}

const initialState = { items: setState(5) }

// console.log('initialState:  ', initialState);

const store = configureStore(initialState);

// console.log('[init]state: ', initialState);
// console.log('[init]state.items: ', initialState.items);

store.dispatch(loadItems());

render(
  <Provider store={store}>
    <MainApp />
  </Provider>,
  document.getElementById('__TODO__'));

export default store;
