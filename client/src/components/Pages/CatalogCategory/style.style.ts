import styled from "styled-components";

export const CatalogCategory = styled.div`
  .main {
    padding-top: 30px;

    .Header {
      margin-bottom: 50px;
      .title {
        display: flex;
        gap: 10px;
        margin-bottom: 20px;
        align-items: center;
        .category-name {
          font-size: 30px;
          text-transform: uppercase;
        }
      }
      .sort {
        display: flex;
        align-items: center;
        justify-content: space-between;
        button {
          background: transparent;
          border: none;
        }
        .popular-sort > button,
        .grid-state {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .grid-state {
          .grid-btn {
            opacity: 0.6;
            &.active {
              opacity: 1;
            }
          }
        }
      }
    }
    .category-content {
      margin-bottom : 30px;
      display: grid;
      grid-template-columns: repeat(12, 1fr);

      .category-filter {
        grid-column: 1 / 4;
      }

      .category-list {
        grid-column: 5 / 13;
      }
    }
  }
`;
