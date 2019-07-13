import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { darken, lighten } from 'polished';

export const Container = styled.main`
  padding: 30px;
  background: #fff;
  border-radius: 4px;

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 520px) {
      flex-direction: column-reverse;
    }

    button {
      background: #7159c1;
      color: #fff;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 180ms ease-in-out;

      @media (max-width: 520px) {
        margin-top: 20px;
        width: 100%;
        padding: 20px;
      }

      &:hover {
        background: ${darken(0.04, '#7159c1')};
      }
    }
  }
`;

export const EmptyCart = styled.section`
  min-height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 560px) {
    min-height: 400px;
  }

  svg {
    font-size: 260px;
    color: #f3f3f6;
    position: absolute;
  }

  div {
    z-index: 1;
    text-align: center;

    h2 {
      font-size: 56px;
    }

    p {
      margin: 12px 0 28px;
      font-size: 16px;
    }
  }
`;

export const StartShopping = styled(Link)`
    background: #7159c1;
    color: #fff;
    border: 0;
    border-radius: 4px;
    padding: 12px 20px;
    font-weight: bold;
    text-transform: uppercase;
    transition: background 180ms ease-in-out;
    text-decoration: none;
    display: inline-block;

    &:hover {
      background: ${lighten(0.04, '#7159c1')};
    }

    &:active {
      background: ${darken(0.04, '#7159c1')};
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  thead {
    @media (max-width: 640px) {
      display: none;
    }
  }

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;

    &:nth-child(3) {
      text-align: center;
    }
  }

  tbody tr {
    border-bottom: 1px solid #eee;
    @media (max-width: 640px) {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
    }
  }

  tbody td {
    padding: 12px;

    &:first-child {
      @media (max-width: 640px) {
        padding-left: 0;
        padding-bottom: 0;
      }
    }

    &:nth-child(2) {
      @media (max-width: 640px) {
        flex: 1 1 60%;
      }

      @media (max-width: 385px) {
        flex: 1;
      }

      span {
        @media (max-width: 640px) {
          font-size: 14px;
          color: #666;
        }
      }
    }

    &:nth-child(3),
    &:nth-child(4),
    &:nth-child(5) {
      @media (max-width: 640px) {
        padding-top: 0;
        padding-bottom: 0;
      }
    }

    &:nth-child(3) {
      @media (max-width: 640px) {
        padding: 0;
      }

      @media (max-width: 356px) {
        flex: 1;

        div {
          justify-content: flex-start;
        }
      }
    }

    &:nth-child(4) {
      @media (max-width: 640px) {
        flex: 1;
        text-align: center;
        font-size: 16px;
      }

      @media (max-width: 356px) {
        display: none;
      }
    }

    &:nth-child(5) {
      @media (max-width: 640px) {
        padding: 12px 0;
      }
    }
  }

  img {
    height: 100px;
  }

  strong {
    display: block;
  }

  span {
    display: block;
    margin-top: 4px;
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    input {
      border: 1px solid #ddd;
      border-radius: 3px;
      color: #666;
      padding: 6px;
      width: 50px;
      text-align: center;

      @media (max-width: 640px) {
        width: 36px;
      }
    }
  }

  button {
    background: none;
    border: 0;
    padding: 6px 8px;

    svg {
      @media (max-width: 640px) {
        width: 24px;
        height: 24px;
      }
    }
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 28px;
    margin-left: 8px;
  }
`;
