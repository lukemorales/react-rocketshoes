import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';
import Loader from 'react-loader-spinner';
import * as CartActions from '../../store/modules/cart/actions';
import * as ProductActions from '../../store/modules/products/actions';
import api from '../../services/api';
import { formatPrice } from '../../utils/format';
import GridPlaceholder from '../../components/GridPlaceholder/GridPlaceholder';
import { ProductList } from './Home_Styles';

export default function Home() {
  const products = useSelector(state => state.products);

  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;

      return sumAmount;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
        loading: false,
      }));

      dispatch(ProductActions.storeProducts(data));
    }

    loadProducts();
  }, [dispatch]);

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  return (
    <ProductList>
      {products === null ? (
        <GridPlaceholder repeatCount={6} />
      ) : (
        products.map(product => (
          <li key={product.id}>
            <figure>
              <img src={product.image} alt={product.title} />
            </figure>
            <strong>{product.title}</strong>

            <div>
              <span>{product.priceFormatted}</span>

              <button type="button" onClick={() => handleAddProduct(product.id)}>
                {product.loading ? (
                  <Loader type="Oval" color="#FFF" height={16} width={24} />
                ) : (
                  <div>
                    <MdAddShoppingCart size={16} color="#FFF" />
                    {amount[product.id] || 0}
                  </div>
                )}

                <span>ADD TO CART</span>
              </button>
            </div>
          </li>
        ))
      )}
    </ProductList>
  );
}
