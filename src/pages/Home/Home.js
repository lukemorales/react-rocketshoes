import React, { Component } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './Home_Styles';

export default class Home extends Component {
  state = {
    newState: null,
  };

  render() {
    return (
      <ProductList>
        <li>
          <img
            src="https://static.netshoes.com.br/produtos/tenis-nike-wmns-downshifter-8-feminino/26/D12-9470-026/D12-9470-026_detalhe1.jpg?resize=280:280"
            alt="Tenis"
          />
          <strong>Tênis daí</strong>
          <span>R$ 129,90</span>

          <button type="button">
            <div>
              <MdAddShoppingCart size={16} color="#FFF" /> 3
            </div>

            <span>ADD TO CART</span>
          </button>
        </li>
        <li>
          <img
            src="https://static.netshoes.com.br/produtos/tenis-nike-wmns-downshifter-8-feminino/26/D12-9470-026/D12-9470-026_detalhe1.jpg?resize=280:280"
            alt=""
          />
          <strong>Tênis daí</strong>
          <span>R$ 129,90</span>

          <button type="button">
            <div>
              <MdAddShoppingCart size={16} color="#FFF" /> 3
            </div>

            <span>ADD TO CART</span>
          </button>
        </li>
        <li>
          <img
            src="https://static.netshoes.com.br/produtos/tenis-nike-wmns-downshifter-8-feminino/26/D12-9470-026/D12-9470-026_detalhe1.jpg?resize=280:280"
            alt=""
          />
          <strong>Tênis daí</strong>
          <span>R$ 129,90</span>

          <button type="button">
            <div>
              <MdAddShoppingCart size={16} color="#FFF" /> 3
            </div>

            <span>ADD TO CART</span>
          </button>
        </li>
        <li>
          <img
            src="https://static.netshoes.com.br/produtos/tenis-nike-wmns-downshifter-8-feminino/26/D12-9470-026/D12-9470-026_detalhe1.jpg?resize=280:280"
            alt=""
          />
          <strong>Tênis daí</strong>
          <span>R$ 129,90</span>

          <button type="button">
            <div>
              <MdAddShoppingCart size={16} color="#FFF" /> 3
            </div>

            <span>ADD TO CART</span>
          </button>
        </li>
        <li>
          <img
            src="https://static.netshoes.com.br/produtos/tenis-nike-wmns-downshifter-8-feminino/26/D12-9470-026/D12-9470-026_detalhe1.jpg?resize=280:280"
            alt=""
          />
          <strong>Tênis daí</strong>
          <span>R$ 129,90</span>

          <button type="button">
            <div>
              <MdAddShoppingCart size={16} color="#FFF" /> 3
            </div>

            <span>ADD TO CART</span>
          </button>
        </li>
        <li>
          <img
            src="https://static.netshoes.com.br/produtos/tenis-nike-wmns-downshifter-8-feminino/26/D12-9470-026/D12-9470-026_detalhe1.jpg?resize=280:280"
            alt=""
          />
          <strong>Tênis daí</strong>
          <span>R$ 129,90</span>

          <button type="button">
            <div>
              <MdAddShoppingCart size={16} color="#FFF" /> 3
            </div>

            <span>ADD TO CART</span>
          </button>
        </li>
      </ProductList>
    );
  }
}
