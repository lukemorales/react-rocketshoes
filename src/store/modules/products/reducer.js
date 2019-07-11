// import produce from 'immer';

export default function productStore(state = [], action) {
  switch (action.type) {
    case '@products/STORE_PRODUCTS':
      return action.products;

    default:
      return state;
  }
}
