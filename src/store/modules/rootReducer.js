import { combineReducers } from 'redux';

import cart from './cart/reducer';
import products from './products/reducer';

export default combineReducers({
  cart,
  products,
});
