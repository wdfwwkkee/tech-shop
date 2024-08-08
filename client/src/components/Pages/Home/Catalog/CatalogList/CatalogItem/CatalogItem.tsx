import React from "react";
import { Item } from "../../../../../../types/DataItem";
import * as styled from "./style.styled";
import { useAppDispatch } from "../../../../../../hooks/useAppDispatch";
import { addToCart } from "../../../../../../slices/cart.slice";
import { Link } from "react-router-dom";
import { notify } from "../../../../../../utils/notify";
import { Checkbox } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { color } from "../../../../../../assets/colors/colors";
import { addWishItem } from "../../../../../../utils/addWishItem";
import { useWish } from "../../../../../../hooks/useWish";
import { useCart } from "../../../../../../hooks/useCart";
import { FormatePrice } from "../../../../../../utils/FormatedPrice";

interface CatalogItemProps {
  item: Item;
}

const CatalogItem: React.FC<CatalogItemProps> = ({ item }) => {
  const dispatch = useAppDispatch();
  const cart = useCart();
  const wish = useWish();

  const existItemInCart = cart.some(
    (cartItem: Item) => cartItem.id === item.id
  );
  const existItemInWish = wish.some(
    (wishItem: Item) => wishItem.id === item.id
  );

  function BuyItem(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.stopPropagation();
    event.preventDefault();
    dispatch(addToCart(item));
    notify("✔ Item added to cart");
  }
  function handleFavorite(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.stopPropagation();
    event.preventDefault();
    addWishItem(item, existItemInWish, dispatch)
  }

  return (
    <styled.Item>
      <Link to={`/catalog/${item.tag}/${item.id}`} replace={true}>
        <div className="img">
          <img src={`${item.img}`} alt="" />
        </div>
        <div className="info">
          <div className="name">{item.name}</div>
          <div className="price">{FormatePrice(item.price)} ₽</div>
          <div className="buy-btn">
            {existItemInCart ? (
              <Link to={"/cart"}>In the cart</Link>
            ) : item.availability ? (
              <button onClick={BuyItem}>Buy</button>
            ) : (
              <button disabled onClick={BuyItem}>Not available</button>
            )}
          </div>
        </div>
        <div className="wish-checkbox">
          <Checkbox
            checked={existItemInWish}
            onClick={handleFavorite}
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
            sx={{
              "& svg": {
                fill: `${color.blue}!important`,
              },
            }}
          />
        </div>
      </Link>
    </styled.Item>
  );
};

export default CatalogItem;
