import { color } from "./../../../../assets/colors/colors";
import styled from "styled-components";

export const Total = styled.div`
  .info {
    display: flex;
    gap: 15px;
    flex-direction: column;
    margin-bottom: 30px;
    .container {
      display: flex;
      width: 100%;
      justify-content: space-between;
      font-weight: bolder;
      &.container-total {
        div {
          font-size: 26px;
          font-weight: 700 !important;
        }
      }
      &.container-count {
        div {
          font-size: 17px;
          color : ${color.dark_gray}
        }
      }
    }
  }
  .buy-btn {
    margin-bottom: 10px;
    button {
      border-radius: 8px;
      border: none;
      font-size: 25px;
      background: ${color.blue};
      color: white;
      padding: 15px 0px;
      width: 100%;

      &:disabled {
        cursor : default;
        background: #091d9e9e;
      }

    }
  }
  .accept {
    display: flex;
    align-items: center;
    width: 100%;
    input {
      background: ${color.blue};
    }
    .text-accept {
      font-size: 15px;
      flex: 0 0 90%;
      color: ${color.dark_gray};
    }
  }
`;
