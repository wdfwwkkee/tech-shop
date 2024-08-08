import Header from "../../UI/Header/Header";
import Divider from "../../UI/Divider/Divider";
import WishList from "./WishList/WishList";
import * as styled from "./style.style";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { Item } from "../../../types/DataItem";
import Empty from "../../UI/Empty/Empty";

const WishPage = () => {
  const wish: Item[] = useAppSelector((state) => state.wish);

  return (
    <styled.Wish>
      <Header />
      <Divider />
      {wish.length > 0 ? (
        <>
          <div className="wish-title">Избранное</div>
          <div className="wish-list">
            <WishList wish={wish} />
          </div>
        </>
      ) : (
        <div style={{paddingTop : 30}}>
            <Empty type="wish" />
        </div>
      )}
    </styled.Wish>
  );
};

export default WishPage;
