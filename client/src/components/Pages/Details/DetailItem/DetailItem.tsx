import React from "react";
import { Item } from "../../../../types/DataItem";
import * as styled from "./style.style";
import { notify } from "../../../../utils/notify";
import { useAppDispatch } from "../../../../hooks/useAppDispatch";
import { addToCart } from "../../../../slices/cart.slice";
import { useCart } from "../../../../hooks/useCart";
import { Link } from "react-router-dom";
import { FormatePrice } from "../../../../utils/FormatedPrice";
interface DetailItemProps {
  item: Item;
}

const DetailItem: React.FC<DetailItemProps> = ({ item }) => {
  const cart = useCart();
  const existItemInCart = cart.some(
    (cartItem: Item) => cartItem.id === item.id
  );
  const dispatch = useAppDispatch();
  function BuyItem() {
    dispatch(addToCart(item));
    notify("✔ Item added to cart");
  }

  return (
    <styled.DetailItem>
      <div className="img">
        <img src={`/${item.img}`} alt="" />
      </div>
      <div className="info">
        <div className="name">{item.name}</div>
        <div className="spec-container">
          <div className="title">Specs :</div>
          {item.specs.map((spec) => (
            <div className="specs">
              <div className="title">{spec.title}:</div>
              <div className="value">{spec.value}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="cart">
        <div className="price">{FormatePrice(item.price)} ₽</div>
        <div className="buy-btn">
          {existItemInCart ? (
            <Link to={"/cart"}>In the cart</Link>
          ) : item.availability ? (
            <button onClick={BuyItem}>Buy</button>
          ) : (
            <button disabled onClick={BuyItem}>
              Not available
            </button>
          )}
        </div>
      </div>
    </styled.DetailItem>
  );
};

export default DetailItem;
