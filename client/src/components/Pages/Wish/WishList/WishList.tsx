import { Item } from "../../../../types/DataItem";
import CatalogItem from "../../Home/Catalog/CatalogList/CatalogItem/CatalogItem";

interface WishListProps {
  wish: Item[];
}

const WishList: React.FC<WishListProps> = ({ wish }) => {
  return (
    <>
      {wish.map((item) => (
        <CatalogItem item={item} />
      ))}
    </>
  );
};

export default WishList;
