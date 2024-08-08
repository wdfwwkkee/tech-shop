import { color } from "./../../../../assets/colors/colors";
import styled from "styled-components";

export const Filter = styled.div`
  box-shadow: 3px -4px 10px 6px rgba(34, 60, 80, 0.2);
  padding: 15px;
  .container {
    .title {
      font-size: 23px;
      margin-bottom: 10px;
    }
    .content {
      margin-bottom: 15px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      .spec-item {
        display: flex;
        gap: 10px;
        align-items: center;
        div {
          color: ${color.dark_gray};
        }
        span {
          padding: 0 !important;
        }
      }
    }
  }
`;
