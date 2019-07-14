import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete, MdRemoveShoppingCart } from 'react-icons/md';
import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../utils/format';
import { Container, ProductTable, Total, EmptyCart, StartShopping } from './Cart_Styles';

export default function Cart() {
  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((totalAmount, product) => {
        return totalAmount + product.price * product.amount;
      }, 0)
    )
  );

  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <Container>
      {cart.length === 0 ? (
        <EmptyCart>
          <MdRemoveShoppingCart />

          <div>
            <h2>Oops...</h2>
            <p>Looks like your shopping cart is empty!</p>
            <StartShopping to="/">Start Shopping</StartShopping>
          </div>
        </EmptyCart>
      ) : (
        <>
          <ProductTable>
            <thead>
              <tr>
                <th />
                <th>PRODUCT</th>
                <th>AMOUNT</th>
                <th>SUBTOTAL</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(product => (
                <tr key={product.id}>
                  <td>
                    <figure>
                      <img src={product.image} alt={product.title} />
                    </figure>
                  </td>
                  <td>
                    <strong>{product.title}</strong>
                    <span>{product.priceFormatted}</span>
                  </td>
                  <td>
                    <div>
                      <button type="button" onClick={() => decrement(product)}>
                        <MdRemoveCircleOutline size={20} color="#7159c1" />
                      </button>
                      <input type="text" readOnly value={product.amount} />
                      <button type="button" onClick={() => increment(product)}>
                        <MdAddCircleOutline size={20} color="#7159c1" />
                      </button>
                    </div>
                  </td>
                  <td>
                    <strong>{product.subtotal}</strong>
                  </td>
                  <td>
                    <button type="button" onClick={() => dispatch(CartActions.removeFromCart(product.id))}>
                      <MdDelete size={20} color="#7159c1" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </ProductTable>

          <footer>
            <button type="submit">Proceed to Checkout</button>
            <Total>
              <span>TOTAL:</span>
              <strong>{total}</strong>
            </Total>
          </footer>
        </>
      )}
    </Container>
  );
}
