import { useEffect, useState } from "react";
import Divider from "../../UI/Divider/Divider";
import Header from "../../UI/Header/Header";
import CartList from "./CartList/CartList";
import * as styled from "./style.style";
import Total from "./Total/Total";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { Item } from "../../../types/DataItem";
import Empty from "../../UI/Empty/Empty";

const Cart = () => {
  const cart: Item[] = useAppSelector((state) => state.cart);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    const newTotal = cart.reduce(
      (acc, item: Item) => acc + item.count * item.price,
      0
    );
    setTotal(newTotal);
  }, [cart]);

  return (
    <>
      <Header />
      <Divider />
      <styled.Cart>
        {cart.length > 0 ? (
          <>
            <div className="cartList">
              <CartList />
            </div>
            <div className="total">
              <Total price={total} />
            </div>
          </>
        ) : (
          <Empty type="cart" />
        )}
      </styled.Cart>
    </>
  );
};

export default Cart;
