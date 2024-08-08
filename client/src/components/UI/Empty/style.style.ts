import styled from "styled-components";
import { color } from "../../../assets/colors/colors";

export const Empty = styled.div`
  background: white;
  border-radius: 20px;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  grid-column: 1 / 13;
  width: 100%;
  text-align: center;
  padding: 20px;
  .title {
    font-size: 30px;
    font-weight: 700;
  }

  .desc {
    margin: 0 auto;
    max-width: 350px;
    color: ${color.dark_gray};
  }

  .home-btn {
    border-radius: 8px;
    border: none;
    font-size: 25px;
    background: ${color.blue};
    color: white;
    max-width: 300px;
    margin: 0 auto;
    padding: 15px 0px;
    width: 100%;
  }
`;
