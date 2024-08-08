import styled from "styled-components";

export const Wish = styled.div`
  .wish-title {
    font-size: 30px;
    font-weight: 700;
    padding: 30px 0px;;
  }
  .wish-list {
    display : grid;
    grid-template-columns : repeat(12, 1fr);
    gap : 30px;
  }
`;
