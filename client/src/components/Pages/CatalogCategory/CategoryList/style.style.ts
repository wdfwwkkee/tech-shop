import { color } from './../../../../assets/colors/colors';
import styled from "styled-components";

export const CategoryList = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 10px;


  .not-found-search {
    grid-column : span 12;
    text-align : center;
    height : 100%;
    div {
      color : ${color.blue};
      font-size : 25px;
      font-weight : 500;

    }
  }

`;
