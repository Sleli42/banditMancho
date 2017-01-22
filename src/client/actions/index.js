export const ITEM_LOADED = 'item/itemLoaded';
export const FINAL_ITEMS = 'item/finalItems';

const colors = ['#F34235', '#E81D62', '#9B26AF', '#6639B6', '#3E50B4', '#2095F2',
  '#02A8F3', '#00BBD3', '#009587', '#4BAE4F', '#FE5621', '#785447', '#9D9D9D', '#5F7C8A'];

const icons = ['ambulance', 'automobile', 'bicycle', 'bus', 'cab', 'car', 'fighter-jet', 'motorcycle',
  'plane', 'rocket', 'ship', 'space-shuttle', 'subway', 'train', 'truck'];

const randomTime = () => (Math.floor(Math.random() * 5) + 1) * 1000;
const getRamdom = (array) => array[(Math.floor(Math.random() * array.length))];

const loadItem = (item) => new Promise((resolve) => {
  setTimeout(() => resolve({
    id: item.id,
    name: getRamdom(icons),
    color: getRamdom(colors),
  }),
  1000);
});

export const addItemToState = item => ({
  type: ITEM_LOADED,
  payload: item,
});

export const finalItems = () => ({
  type: FINAL_ITEMS,
  payload: { icon: 'paper-plane', color: '#cd4436' },
});

export const loadItems = () => (dispatch, getState) => {
  const { items } = getState();

  const promises = items.map(item =>
    loadItem(item).then(value =>
      dispatch(addItemToState(value))
  ));

  return Promise.all(promises)
    .then(() => dispatch(finalItems()))
    .catch((error) => {
      return error;
    });
}

export default {
  addItemToState,
  loadItems,
};
