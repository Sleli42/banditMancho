export const ITEMS_LOADED = 'items/itemsLoaded';
export const ITEM_LOADED = 'item/itemLoaded';

const colors = ['#F34235', '#E81D62', '#9B26AF', '#6639B6', '#3E50B4', '#2095F2',
  '#02A8F3', '#00BBD3', '#009587', '#4BAE4F', '#FE5621', '#785447', '#9D9D9D', '#5F7C8A'];

const icons = ['ambulance', 'automobile', 'bicycle', 'bus', 'cab', 'car', 'fighter-jet', 'motorcycle',
  'plane', 'rocket', 'ship', 'space-shuttle', 'subway', 'train', 'truck'];

const loadedItem = item => ({
  type: ITEM_LOADED,
  payload: item,
});

export const loadItem = (dispatch) => {
  const p0 = new Promise(resolve, reject);
  p0.then(dispatch(loadedItem))
    .then(null, error => console.log(`${error.type} failed !`));
};

export const loadedItems = items => ({
  type: ITEMS_LOADED,
  payload: items,
});

export default {
  loadedItems,
  loadedItem,
};
