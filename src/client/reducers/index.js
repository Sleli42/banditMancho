import { ITEMS_LOADED } from '../actions';

const itemsReducer = (state = [], action) => {
  // const { payload } = action;
  // console.log('payload: ', payload);
  switch (action.type) {
    case ITEMS_LOADED:
      // console.log('state: ', state);
      return state;
    default: return state;
  }
};

export default itemsReducer;
