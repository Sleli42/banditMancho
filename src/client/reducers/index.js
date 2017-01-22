import { ITEM_LOADED, FINAL_ITEMS } from '../actions';

const items = (state = [], action) => {
  const { payload } = action;
  const { items } = state;
  switch (action.type) {
    case ITEM_LOADED:
      const newState = { items: items.map(item => ((item.id === payload.id) ? payload : item)) }
      return newState;
    case FINAL_ITEMS:
      const finalState = { items: items.map(item => ({ ...payload, id: item.id })) }
      return finalState;
    default:
      return state;
  }
};

export default items;
