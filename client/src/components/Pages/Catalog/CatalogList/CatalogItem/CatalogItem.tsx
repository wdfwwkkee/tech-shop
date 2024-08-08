import React from "react";

import * as styled from "./style.style";
import { Link } from "react-router-dom";

interface categoryProps {
  category: {
    img: string;
    name: string;
  };
}

const CatalogItem: React.FC<categoryProps> = ({ category }) => {
  return (
    <styled.Category>
      <Link to={`${category.name}`}>
        <div className="img">
          <img src={`${category.img}`} alt="" />
        </div>
        <div className="name">{category.name}</div>
      </Link>
    </styled.Category>
  );
};

export default CatalogItem;
