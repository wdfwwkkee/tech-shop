import styled from "styled-components";
import { color } from "../../../../../assets/colors/colors";

export const Category = styled.div`
  position: relative;
  a {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
  }
  grid-column: span 6;
  .img {
    flex: 0 0 90%;
    padding: 10px;
    display: flex;
    align-items: center;
    background: ${color.blue};
    border-radius: 15px;
    margin-bottom: 20px;
  }
  .name {
    font-size: 30px;
    font-weight: 600;
    text-align: center;
    text-transform : uppercase;
  }
`;
