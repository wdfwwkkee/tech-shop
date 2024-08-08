import * as styled from "./style.style";
import { useQuery } from "@tanstack/react-query";
import { AppService } from "../../../../service/service";
import { Loading } from "../../../UI/Loading/style.style";
import { Spec } from "../../../../types/Spec";
import { Checkbox } from "@mui/material";
import { color } from "../../../../assets/colors/colors";
import React from "react";
import { v4 as uuidv4 } from "uuid";

interface CategoryFilterProps {
  category?: string;
  handleSpecs: (specItem: Spec) => void;
  selectedSpecs?: Spec[];
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  category,
  handleSpecs,
  selectedSpecs = [],
}) => {
  const { isPending, error, data } = useQuery<Spec[]>({
    queryKey: ["categoryFilter", category],
    queryFn: () => AppService.getSpecs(category),
  });

  if (isPending) return <Loading />;
  if (error) return <div>An error has occurred: {error.message}</div>;

  const isChecked = (specItem: Spec, item: string): boolean => {
    return selectedSpecs.some(
      (spec) => spec.title === specItem.title && spec.spec.includes(item)
    );
  };

  const handleCheck = (specItem: Spec, item: string) => {
    const newSpec = { title: specItem.title, spec: [item] };
    handleSpecs(newSpec);
  };

  return (
    <styled.Filter>
      {data?.map((specItem) => (
        <div key={uuidv4()} className="container">
          <div className="title">{specItem.title}</div>
          <div className="content">
            {specItem.spec.map((item) => (
              <div key={uuidv4()} className="spec-item">
                <div>
                  <Checkbox
                    checked={isChecked(specItem, item)}
                    onClick={() => handleCheck(specItem, item)}
                    sx={{
                      "& svg": {
                        fill: `${color.blue}!important`,
                      },
                    }}
                  />
                </div>
                <div>{item}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </styled.Filter>
  );
};

export default CategoryFilter;
