import { color } from "./../../../../../../assets/colors/colors";
import styled from "styled-components";

export const Item = styled.div`
  grid-column: span 4;

  position: relative;
  padding: 20px;
  & > a {
    display: flex;
    gap: 20px;
    justify-content: space-between;
    flex-direction: column;
  }
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  border-radius: 12px;
  &:hover .wish-checkbox {
    opacity: 1 !important;
    visibility: visible;
  }

  .wish-checkbox {
    position: absolute;
    top: 10px;
    opacity: 0;
    visibility: hidden;
    right: 10px;
    transition: all 0.3s ease;
  }

  .img {
    display: flex;
    height: 400px;
    img {
      object-fit: contain;
    }
  }
  .info {
    display: flex;
    flex-direction: column;
    gap: 10px;
    .name {
      font-size: 30px;
      text-transform: uppercase;
      font-weight: bolder;
    }
    .price {
      font-size: 25px;
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
