import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style-type: none;

  @media (max-width: 945px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 490px) {
    grid-template-columns: repeat(1, 1fr);
  }

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;

    &:hover figure img {
      opacity: 0.9;
    }

    figure {
      display: flex;
      justify-content: center;
      position: relative;
      width: 100%;
      max-height: 250px;
      padding-top: 91%;
      text-align: center;

      @media (max-width: 490px) {
        padding-top: 60%;
      }

      img,
      span {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        max-height: 100%;
        margin: auto;
        transition: opacity 150ms ease-in-out;
      }
    }

    > strong {
      font-size: 16px;
      line-height: 20px;
      margin-top: 5px;

      + div {
        display: flex;
        flex-direction: column;
        margin-top: auto;

        > span {
          font-size: 21px;
          font-weight: bold;
          margin: 5px 0 20px;
        }

        button {
          background: #7159c1;
          color: #fff;
          border: 0;
          border-radius: 4px;
          overflow: hidden;
          position: relative;

          display: flex;
          align-items: center;
          transition: 180ms ease-in-out;

          &:hover {
            background: ${lighten(0.04, '#7159c1')};
          }

          &:active {
            background: ${darken(0.04, '#7159c1')};
          }

          > div:first-child {
            display: flex;
            align-items: center;
            padding: 12px;
            background: rgba(0, 0, 0, 0.1);
            position: absolute;

            @media (max-width: 680px) {
              position: initial;
            }

            @media (max-width: 490px) {
              position: absolute;
            }

            @media (max-width: 360px) {
              position: initial;
            }

            svg {
              margin: 0 5px;
            }
          }

          > span:nth-child(2) {
            padding: 12px;
            flex: 1;
            text-align: center;
            font-weight: bold;
          }
        }
      }
    }
  }
`;
