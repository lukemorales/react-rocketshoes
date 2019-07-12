import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 0;

  > a figure img {
    width: 100%;
    max-width: 275px;
  }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 150ms ease-in-out;
  position: relative;

  @media (max-width: 430px) {
    margin-left: 16px;
  }

  &:hover {
    opacity: 0.7;
  }

  & div {
    text-align: right;
    margin-right: 10px;

    @media (max-width: 430px) {
      display: none;
    }

    & strong {
      display: block;
      color: #fff;
    }

    & span {
      font-size: 12px;
      color: #999;
    }
  }

  > span:last-child {
    background: #7159c1;
    color: #fff;
    font-size: 11px;
    line-height: 20px;
    text-align: center;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    position: absolute;
    right: -2px;
    top: -6px;
    display: none;

    @media (max-width: 430px) {
      display: initial;
    }
  }
`;
