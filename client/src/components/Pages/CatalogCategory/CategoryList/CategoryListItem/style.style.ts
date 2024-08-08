import { color } from "./../../../../../assets/colors/colors";
import styled from "styled-components";

export const Item = styled.div<{ $gridState?: number }>`
  grid-column: span ${(props) => props.$gridState};
  padding: 15px 0px;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  & > a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
  }
  .img {

  }

  .info {
    width: calc(100% - 60px);
    display: flex;
    flex-direction: column;
    gap: 15px;

    .name {
      font-size: 30px;
    }
    .about {
      display: flex;
      align-items: center;
      justify-content: space-between;
      span {
        color: red;
        &.active {
          color: green;
        }
      }
      .favorite {
        position : relative;
        z-index : 100;
      }
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
        padding: 10px 0px;
        width: 100%;
        &:not(:disabled) {
          &:hover {
            opacity: 0.8;
          }
          &:active {
            transform: scale(0.95);
          }
        }
        &:disabled {
          cursor: default;
          background: #091d9e9e;
        }
        transition: transform 0.1s ease;
      }
    }
  }
`;
