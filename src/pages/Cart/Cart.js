import React, { Component } from 'react';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';
import { Container, ProductTable, Total } from './Cart_Styles';

export default class Cart extends Component {
  state = {
    newState: null,
  };

  render() {
    return (
      <Container>
        <ProductTable>
          <thead>
            <tr>
              <th />
              <th>PRODUTO</th>
              <th>QTD</th>
              <th>SUBTOTAL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img
                  src="https://static.netshoes.com.br/produtos/tenis-nike-wmns-downshifter-8-feminino/26/D12-9470-026/D12-9470-026_detalhe1.jpg?resize=280:280"
                  alt=""
                />
              </td>
              <td>
                <strong>Tênis muito massa</strong>
                <span>R$ 129,90</span>
              </td>
              <td>
                <div>
                  <button type="button">
                    <MdRemoveCircleOutline size={20} color="#7159c1" />
                  </button>
                  <input type="number" readOnly value={2} />
                  <button type="button">
                    <MdAddCircleOutline size={20} color="#7159c1" />
                  </button>
                </div>
              </td>
              <td>
                <strong>R$ 258.8</strong>
              </td>
              <td>
                <button type="button">
                  <MdDelete size={20} color="#7159c1" />
                </button>
              </td>
            </tr>
          </tbody>
        </ProductTable>

        <footer>
          <button type="submit">Purchase</button>
          <Total>
            <span>TOTAL:</span>
            <strong>R$ 1920,28</strong>
          </Total>
        </footer>
      </Container>
    );
  }
}
