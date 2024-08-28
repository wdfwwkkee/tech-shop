import styled from "styled-components";
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0px;
`;

export const Search = styled.div`
  flex: 0 0 45%;
  position: relative;
  .icon {
    position: absolute;
    top: 50%;
    touch-action: none;
    pointer-events: none;

    left: 10px;
    transform: translate(0, -50%);
  }
  input {
    padding-left: 40px;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  .action-item {
    .icon {
      margin-bottom: 5px;
      height : 26px;
    }
    text-align: center;
  }
  .avatar {
    width : 50px;
    object-fit : cover;
    height : 50px;
    border-radius : 50%;
  }
`;
