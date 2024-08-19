import { color } from './../../../assets/colors/colors';
import styled from "styled-components";



export const Profile = styled.div`
  .username {
    margin-bottom : 15px;
    display : flex;
    align-items : center;
    gap : 10px;
    .icon {
      button {
        cursor: pointer;
        background: transparent;
        border: none;
        opacity: 0.5;

        &:hover {
          opacity: 1;
        }
      }
    }
  }
  .change-password {
    margin-bottom : 15px;
    a {
      text-decoration : underline;
      color : ${color.blue};
    }
  }
  .logout {
    padding : 10px 30px;
    border-radius : 8px;
    border : 1px solid black;
    background : red;
    color : white;
  }
`;
