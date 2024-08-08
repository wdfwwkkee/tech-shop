import CatalogItem from "./CatalogItem/CatalogItem";
import * as styled from "./style.style";
import { AppService } from "../../../../service/service";
import { useQuery } from "@tanstack/react-query";
import { Category } from "../../../../types/Category";
import Loading from "../../../UI/Loading/Loading";

const CatalogList: React.FC = () => {
  const { isPending, error, data } = useQuery<Category[]>({
    queryKey: ["category"],
    queryFn: () => {
      return AppService.getCategory();
    },
  });

  if (isPending) return <Loading />;

  if (error) return "An error has occurred: " + error.message;

  return (
    <styled.CatalogList>
      {data.map((categoryItem, index : number) => (
        <CatalogItem key={index} category={categoryItem} />
      ))}
    </styled.CatalogList>
  );
};

export default CatalogList;