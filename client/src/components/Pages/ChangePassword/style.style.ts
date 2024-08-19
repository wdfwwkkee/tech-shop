import { color } from './../../../assets/colors/colors';
import styled from "styled-components";

export const ChangePassword = styled.div`
  padding: 30px;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  max-width: 1100px;
  margin: 0 auto;
  
  .loading {
    
  }

  & > .title {
    font-size: 30px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 30px;
  }

  .inputs {
    margin-bottom : 30px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    .input-container {
      .title {
        font-weight: 600;
        margin-bottom: 10px;
      }
      .input-error {
        color : red;
      }
    }
  }

  .submit-btn {
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
`;
