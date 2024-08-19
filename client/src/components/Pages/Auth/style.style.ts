import styled from "styled-components";
import { color } from "../../../assets/colors/colors";

export const Login = styled.div<{isLoading?: boolean}>`
  margin-top: 50px!important;
  padding-bottom: 30px;
  text-align: center;
  max-width: 1000px;
  position : relative;
  z-index : 50;
  margin: 0 auto;

  opacity : ${(props) => props.isLoading ? 0.4 : 1};

  .Loader {
    z-index : 100;
    opacity : 1!important;
    position : absolute;
    top : 50%;
    transform : scale(1.5);
    left : 50%;
  }

  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  & > .title {
    font-size: 35px;
    font-weight: 600;
    margin-bottom: 30px;
  }
  .inputs {
    padding: 0 30px;
    text-align: start;
    .input-container {
      margin-bottom: 30px;
      .title {
        font-size: 23px;
        margin-bottom: 10px;
      }

      .input-error {
        color : red;
      }
    }
  }
  .submit-btn {
    margin-bottom: 20px !important;
    max-width: calc(100% - 60px);
    margin: 0 auto;
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

  .not-account {
    display: flex;
    padding: 0 30px;
    gap: 5px;
    a {
      color: ${color.blue};
    }
  }
`;
