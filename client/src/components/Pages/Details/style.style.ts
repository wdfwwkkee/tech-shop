import { color } from "./../../../assets/colors/colors";
import styled from "styled-components";

export const Detail = styled.div`
  .main {
    padding-top: 30px;
    .header {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 50px;

      .name {
        font-size: 25px;
      }
    }
  }
  .Not-found {
    text-align: center;
    div {
      color: ${color.blue};
      font-size: 30px;
      font-weight: 600;
      margin-bottom: 20px;
    }
    a {
      border-radius: 8px;
      border: none;
      font-size: 25px;
      background: ${color.blue};
      color: white;
      padding: 15px 20px;
      transition: transform 0.1s ease;
      &:hover {
        opacity: 0.8;
      }
      &:active {
        transform: scale(0.95);
      }
    }
  }
`;
