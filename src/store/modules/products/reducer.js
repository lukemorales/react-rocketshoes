import produce from 'immer';

export default function products(state = null, action) {
  switch (action.type) {
    case '@products/STORE_PRODUCTS':
      return action.products;

    case '@products/SET_PRODUCT_STATUS': {
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);

        if (productIndex >= 0) {
          draft[productIndex].loading = Number(action.status);
        }
      });
    }

    default:
      return state;
  }
}
