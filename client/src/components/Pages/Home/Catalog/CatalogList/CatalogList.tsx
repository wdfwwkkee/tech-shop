// File: CatalogList.tsx
import React from "react";
import { Item } from "../../../../../types/DataItem";
import CatalogItem from "./CatalogItem/CatalogItem";
import * as styled from "./style.style";

interface DataProps {
  data: Item[]
}

const CatalogList: React.FC<DataProps> = ({ data }) => {
  return (
    <styled.ItemList>
      {data.map((item) => (
        <CatalogItem key={item.id} item={item} />
      ))}
    </styled.ItemList>
  );
};

export default CatalogList;
