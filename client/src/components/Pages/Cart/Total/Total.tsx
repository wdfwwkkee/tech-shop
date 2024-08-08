import React, { useEffect, useState } from "react";
import * as styled from "./style.style";
import Checkbox from "@mui/material/Checkbox";
import { color } from "../../../../assets/colors/colors";
import { useAppSelector } from "../../../../hooks/useAppSelector";
import { FormatePrice } from "../../../../utils/FormatedPrice";
import { Item } from "../../../../types/DataItem";

interface TotalProps {
  price: number;
}

const Total: React.FC<TotalProps> = ({ price }) => {
  const [checked, setChecked] = useState(true);
  const [cartLength, setCartLength] = useState(0);
  const cart : Item[] = useAppSelector((state) => state.cart);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  useEffect(() => {
    const newLength = cart.reduce((acc, item : Item) => acc + item.count, 0);
    setCartLength(newLength)
  }, [cart])


  return (
    <styled.Total>
      <div className="info">
        <div className="container container-count">
          <div className="title">Товары, {cartLength} шт.</div>
          <div className="price">{FormatePrice(price)} ₽</div>
        </div>
        <div className="container container-total">
          <div className="title">Итого</div>
          <div className="price">{FormatePrice(price)} ₽</div>
        </div>
      </div>
      <div className="buy-btn">
        {checked ? (
          <button>Checkout</button>
        ) : (
          <button disabled>Checkout</button>
        )}
      </div>
      <div className="accept">
        <Checkbox
          checked={checked}
          onChange={handleChange}
          sx={{
            "& svg": {
              fill: `${color.blue}!important`,
            },
          }}
        />
        <span className="text-accept">
          Соглашаюсь с правилами пользования торговой площадкой и возврата
        </span>
      </div>
    </styled.Total>
  );
};

export default Total;
