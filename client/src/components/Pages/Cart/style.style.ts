import styled from "styled-components";

export const Cart = styled.div`
  display: grid;
  align-items: start;
  padding-top: 30px;
  grid-template-columns: repeat(12, 1fr);
  background-color: #f6f6f9;
  gap: 30px;

  .cartList {
    grid-column: 1 / 9;
    background: white;
    padding: 30px 20px;
    border-radius: 20px;
  }
  .total {
    background: white;
    padding: 20px;
    border-radius: 30px 20px;
    grid-column: 9 / 13;
  }
`;
