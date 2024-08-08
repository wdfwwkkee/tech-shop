import { useAppSelector } from "../../../../hooks/useAppSelector";
import { Item } from "../../../../types/DataItem";
import CartItem from "./CartItem/CartItem";
import * as styled from "./style.style";
const CartList = () => {
  const cart = useAppSelector((state) => state.cart);
  return (
    <styled.CartList>
      <div className="title">Cart {cart.length} items</div>
      {cart.map((cartItem : Item) => (
        <CartItem item={cartItem} />
      ))}
    </styled.CartList>
  );
};

export default CartList;
