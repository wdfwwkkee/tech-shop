import { Checkbox, IconButton } from "@mui/material";
import * as styled from "./style.style";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import { FormatePrice } from "../../../../../utils/FormatedPrice";
import { color } from "../../../../../assets/colors/colors";
import { Item } from "../../../../../types/DataItem";
import { useAppDispatch } from "../../../../../hooks/useAppDispatch";
import {
  decrementCounter,
  incrementCounter,
  deleteById,
} from "../../../../../slices/cart.slice";
import { notify } from "../../../../../utils/notify";
import { useWish } from "../../../../../hooks/useWish";
import { addWishItem } from "../../../../../utils/addWishItem";
import { Link } from "react-router-dom";

interface CartItemProps {
  item: Item;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const dispatch = useAppDispatch();
  const wish = useWish();

  const existItemInWish = wish.some(
    (wishItem: Item) => wishItem.id === item.id
  );

  function deleteItem() {
    dispatch(deleteById(item.id.toString()));
    notify("✔ item removed from cart");
  }
  function handleFavorite() {
    addWishItem(item, existItemInWish, dispatch);
  }
  function increment() {
    dispatch(incrementCounter(item));
  }
  function decrement() {
    dispatch(decrementCounter(item));
  }

  return (
    <styled.CartItem>
      <Link to={`/catalog/${item.tag}/${item.id}`} replace={true}>
        <div className="img">
          <img src={item.img} alt="" />
        </div>
        <div className="about">
          <div className="name">{item.name}</div>
          <div className="color">Black</div>
        </div>
      </Link>
      <div className="main">
        <div className="counter">
          <div>
            {item.count <= 1 ? (
              <button disabled onClick={decrement} className="dec">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="black"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"
                  />
                </svg>
              </button>
            ) : (
              <button onClick={decrement} className="dec">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="black"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"
                  />
                </svg>
              </button>
            )}
            <div className="count">{item.count}</div>
            <button onClick={increment} className="inc">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="black"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="other">
          <div className="price">{FormatePrice(item.count * item.price)} ₽</div>
          <div className="actions">
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
            <IconButton onClick={deleteItem}>
              <DeleteIcon sx={{ "& path": { color: `${color.blue}` } }} />
            </IconButton>
          </div>
        </div>
      </div>
    </styled.CartItem>
  );
};

export default CartItem;
