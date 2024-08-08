import { color } from './../../../../assets/colors/colors';
import styled from "styled-components";

export const DetailItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;

  .img {
    flex: 0 0 30%;
  }
  .info {
    flex: 0 0 40%;

    .name {
      font-size: 30px;
      font-weight: 600;
      margin-bottom : 20px;
    }
    .spec-container {
        max-width : 300px;
        & > .title {
            margin-bottom : 10px;
        }
        .specs {
            display : flex;
            align-items : center;
            justify-content : space-between;
            margin-bottom : 10px;
            div {
                color : ${color.dark_gray};
            }
        }
    }
  }
  .cart {
    background: ${color.light_blue};
    padding: 30px 40px;
    flex: 0 0 30%;
    border-radius: 12px;
    .price {
      font-size: 25px;
      font-weight: 600;
      margin-bottom: 20px;
    }
    .buy-btn {
      a {
        display: flex;
        justify-content: center;
        border-radius: 8px;
        border: none;
        font-size: 25px;
        background: #091d9e38;
        color: ${color.blue};
        padding: 15px 0px;
        width: 100%;
        transition: transform 0.1s ease;
        &:hover {
          opacity: 0.8;
        }
        &:active {
          transform: scale(0.95);
        }
      }
      button {
        border-radius: 8px;
        border: none;
        font-size: 25px;
        background: ${color.blue};
        color: white;
        padding: 15px 0px;
        &:disabled {
          cursor: default;
          background: #091d9e9e;
        }
        width: 100%;
        transition: transform 0.1s ease;
        &:not(:disabled) {
          &:hover {
            opacity: 0.8;
          }
          &:active {
            transform: scale(0.95);
          }
        }
      }
    }
  }
`;
