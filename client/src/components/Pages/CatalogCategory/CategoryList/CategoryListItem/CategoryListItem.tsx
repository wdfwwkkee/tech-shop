import React from "react";
import { Item } from "../../../../../types/DataItem";
import * as styled from "./style.style";
import { FormatePrice } from "../../../../../utils/FormatedPrice";
import { Checkbox } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { addWishItem } from "../../../../../utils/addWishItem";
import { useWish } from "../../../../../hooks/useWish";
import { useAppDispatch } from "../../../../../hooks/useAppDispatch";
import { color } from "../../../../../assets/colors/colors";
import { addToCart } from "../../../../../slices/cart.slice";
import { notify } from "../../../../../utils/notify";
import { useCart } from "../../../../../hooks/useCart";
import { Link } from "react-router-dom";

interface CategoryListItemProps {
  categoryItem: Item;
  gridState?: number;
}

const CategoryListItem: React.FC<CategoryListItemProps> = ({
  categoryItem,
  gridState,
}) => {
  const wish = useWish();
  const cart = useCart();
  const dispatch = useAppDispatch();
  const existItemInWish = wish.some(
    (wishItem: Item) => wishItem.id === categoryItem.id
  );
  const existItemInCart = cart.some(
    (cartItem: Item) => cartItem.id === categoryItem.id
  );

  function BuyItem(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.stopPropagation();
    event.preventDefault();
    dispatch(addToCart(categoryItem));
    notify("✔ Item added to cart");
  }

  const handleToggleFavorite = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    event.preventDefault();
    addWishItem(categoryItem, existItemInWish, dispatch);
  };

  return (
    <styled.Item $gridState={gridState}>
      <Link to={`${categoryItem.id}`}>
        <div className="img">
          <img src={`/${categoryItem.img}`} alt="" />
        </div>
        <div className="info">
          <div className="name">{categoryItem.name}</div>
          <div className="price">{FormatePrice(categoryItem.price)} ₽</div>
          <div className="about">
            <div className="availability">
              {categoryItem.availability ? (
                <span className="active">Available</span>
              ) : (
                <span>Not-Available</span>
              )}
            </div>
            <div className="favorite">
              <Checkbox
                checked={existItemInWish}
                onClick={handleToggleFavorite}
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
                sx={{
                  "& svg": {
                    fill: `${color.blue}!important`,
                  },
                }}
              />
            </div>
          </div>
          <div className="buy-btn">
            {existItemInCart ? (
              <Link to={"/cart"}>In the cart</Link>
            ) : categoryItem.availability ? (
              <button onClick={BuyItem}>In cart</button>
            ) : (
              <button disabled onClick={BuyItem}>
                Not available
              </button>
            )}
          </div>
        </div>
      </Link>
    </styled.Item>
  );
};

export default CategoryListItem;
