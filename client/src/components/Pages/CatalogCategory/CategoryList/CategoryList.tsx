import React, { useEffect, useState } from "react";
import CategoryListItem from "./CategoryListItem/CategoryListItem";
import { Item } from "../../../../types/DataItem";
import * as styled from "./style.style";
import { AppService } from "../../../../service/service";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../UI/Loading/Loading";
import { Spec } from "../../../../types/Spec";
import { v4 as uuidv4 } from "uuid";

interface CategoryListProps {
  category?: string;
  gridState?: number;
  setSelectedSpecs: React.Dispatch<React.SetStateAction<Spec[]>>;
  selectedSpecs: Spec[];
}

const CategoryList: React.FC<CategoryListProps> = ({
  category,
  gridState,
  selectedSpecs,
  setSelectedSpecs,
}) => {
  const [filteredData, setFilteredData] = useState<Item[]>([]);
  const { isPending, error, data } = useQuery<Item[]>({
    queryKey: ["categoryList"],
    queryFn: () => {
      return AppService.getItemsByCategory(category);
    },
  });

  function resetSpecs() {
    setSelectedSpecs([]);
  }

  useEffect(() => {
    if (selectedSpecs.length > 0 && data) {
      const newFilteredData = data.filter((dataItem) =>
        selectedSpecs.every((selSpec) =>
          dataItem.specs.some((spec) =>
            selSpec.spec.includes(spec.value.toString())
          )
        )
      );
      setFilteredData(newFilteredData);
    } else if (data) {
      setFilteredData(data);
    }
  }, [selectedSpecs, data]);

  if (isPending) return <Loading />;
  if (error) return "An error has occurred: " + error.message;
  return (
    <styled.CategoryList>
      {selectedSpecs.length > 0 ? (
        filteredData.length > 0 ? (
          filteredData.map((filterItem) => (
            <CategoryListItem
              key={uuidv4()}
              gridState={gridState}
              categoryItem={filterItem}
            />
          ))
        ) : (
          <div className="not-found-search">
            <div>Result not found</div>
            <button onClick={() => resetSpecs()}>Reset filters</button>
          </div>
        )
      ) : (
        data &&
        data.map((categoriesItem) => (
          <CategoryListItem
            key={uuidv4()}
            gridState={gridState}
            categoryItem={categoriesItem}
          />
        ))
      )}
    </styled.CategoryList>
  );
};

export default CategoryList;
