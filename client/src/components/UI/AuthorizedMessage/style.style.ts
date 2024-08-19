import styled from "styled-components";
import { color } from "../../../assets/colors/colors";

export const Authorized = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 5 0px;

  & > div {
    font-size : 25px;
    margin-bottom : 30px;
  }

  .log-btn {
    display : block;
    max-width : 300px;
    margin : 0 auto;
    border-radius: 8px;
    border: none;
    width : 100%;
    font-size: 25px;
    background: ${color.blue};
    color: white;
    padding: 15px 0px;
    transition: transform 0.1s ease;
    &:hover {
      opacity: 0.8;
    }
    &:active {
      transform: scale(0.95);
    }
  }
`;
