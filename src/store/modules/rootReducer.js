import { combineReducers } from 'redux';

import cart from './cart/reducer';
import productStore from './products/reducer';

export default combineReducers({
  cart,
  productStore,
});
