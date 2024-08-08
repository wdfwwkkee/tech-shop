import Divider from "../../UI/Divider/Divider";
import Header from "../../UI/Header/Header";
import CatalogList from "./CatalogList/CatalogList";
import * as styled from "./style.style";

const Catalog = () => {
  return (
    <styled.Catalog>
      <Header />
      <Divider />
      <div className="catalog-list">
        <div className="title">
          Catalog-List
        </div>
        <CatalogList />
      </div>
    </styled.Catalog>
  );
};

export default Catalog;
