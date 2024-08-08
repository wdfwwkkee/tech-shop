import { color } from "./../../../../../assets/colors/colors";
import styled from "styled-components";

export const CartItem = styled.div`
  margin-bottom: 20px;
  & > a {
    gap : 10px;
    display: flex;
    grid-column : 1 / 7;
    .about {
      display: flex;
      flex-direction: column;
      gap: 10px;
      grid-column: span 6;
      .name {
        font-size: 27px;
      }
    }
  }
  display: grid;
  width: 100%;
  align-items: center;
  grid-template-columns: repeat(12, 1fr);
  gap: 30px;

  &:hover .actions {
    opacity: 1 !important;
  }

  gap: 10px;
  .img {
    display: flex;
    img {
      max-width: 150px;
    }
  }
  .main {
    display : grid;
    width: 100%;
    grid-template-columns: repeat(12, 1fr);
    grid-column : 7 / 13;

    .other {
      grid-column : 6 / 12;
      text-align: end;
      .price {
        color: ${color.blue};
        font-size: 25px;
        font-weight: 600;
        margin-bottom: 15px;
      }
      .actions {
        opacity: 0;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 10px;
        transition: opacity 0.3s ease;
        button {
          border: none;
          padding: 0 !important;
          background: transparent;
        }
      }
    }
    .counter {
      grid-column: 1 / 6;
    }
    .counter > div {
      display: flex;
      align-items: center;
      gap: 20px;
      button {
        padding: 5px 10px;
        font-size: 25px;
        background-color: #f1f1f5;
        border: none;
        svg {
          fill: black;
          stroke: black;
        }
        border-radius: 10px;
        &:hover {
          background-color: #e8e8f0;
        }
        &:disabled {
          opacity: 0.5;
          cursor: default;
        }
      }
    }
  }
`;
