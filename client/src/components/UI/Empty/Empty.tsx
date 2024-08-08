import React from "react";
import { Link } from "react-router-dom";
import * as styled from './style.style'

interface EmptyProps {
  type: "cart" | "wish";
}

const Empty: React.FC<EmptyProps> = ({ type }) => {
  return (
    <styled.Empty className="empty">
      <div className="title">
        {type === "cart" ? "В корзине пока пусто" : "В избранном пока пусто"}
      </div>
      <div className="desc">
        Загляните на главную, чтобы выбрать товары или найдите нужное в поиске
      </div>
      <Link className="home-btn" to={"/"}>
        Перейти на главную
      </Link>
    </styled.Empty>
  );
};

export default Empty;
