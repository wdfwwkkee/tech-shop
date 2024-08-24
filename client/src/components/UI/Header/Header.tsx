import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import * as styled from "./header.style";
import Badge from "@mui/material/Badge";
import { color } from "../../../assets/colors/colors";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { useAuth } from "../../../hooks/useAuth";

const Header = () => {
  const cartLength = useAppSelector((state) => state.cart).length;
  const { isAuth, email, username } = useAuth();

  return (
    <styled.Header>
      <Logo />
      <styled.Search>
        <div className="icon">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.11111 15.2222C12.0385 15.2222 15.2222 12.0385 15.2222 8.11111C15.2222 4.18375 12.0385 1 8.11111 1C4.18375 1 1 4.18375 1 8.11111C1 12.0385 4.18375 15.2222 8.11111 15.2222Z"
              stroke="#454545"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17 17L13.1333 13.1333"
              stroke="#454545"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <input type="text" placeholder="Поиск" />
      </styled.Search>
      <styled.Actions>
        <Link to={"/catalog"} className="action-item">
          <div className="icon">
            <svg
              width="27"
              height="18"
              viewBox="0 0 27 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="0.5" width="2" height="2" rx="1" fill="#454545" />
              <rect x="6.5" width="20" height="2" rx="1" fill="#454545" />
              <rect x="0.5" y="8" width="2" height="2" rx="1" fill="#454545" />
              <rect x="6.5" y="8" width="20" height="2" rx="1" fill="#454545" />
              <rect x="0.5" y="16" width="2" height="2" rx="1" fill="#454545" />
              <rect
                x="6.5"
                y="16"
                width="20"
                height="2"
                rx="1"
                fill="#454545"
              />
            </svg>
          </div>
          <div className="text">Каталог</div>
        </Link>
        <Link to={"/wish"} className="action-item">
          <div className="icon">
            <Badge
              sx={{
                "& .MuiBadge-badge": {
                  background: ` ${color.blue}`,
                },
              }}
              badgeContent={0}
              color="secondary"
            >
              <FavoriteBorderOutlinedIcon />
            </Badge>
          </div>
          <div className="text">Избранное</div>
        </Link>
        <Link to={"/cart"} className="action-item">
          <div className="icon">
            <Badge
              sx={{
                "& .MuiBadge-badge": {
                  background: ` ${color.blue}`,
                },
              }}
              badgeContent={cartLength}
              color="secondary"
            >
              <ShoppingCartOutlinedIcon />
            </Badge>
          </div>
          <div className="text">Корзина</div>
        </Link>
        <Link to={isAuth ? "/profile" : "login"} className="action-item">
          <div className="icon">
            <svg
              width="22"
              height="24"
              viewBox="0 0 22 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 23V20.6667C21 19.429 20.4732 18.242 19.5355 17.3668C18.5979 16.4917 17.3261 16 16 16H6C4.67392 16 3.40215 16.4917 2.46447 17.3668C1.52678 18.242 1 19.429 1 20.6667V23"
                stroke="#454545"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.5 11C13.2614 11 15.5 8.76142 15.5 6C15.5 3.23858 13.2614 1 10.5 1C7.73858 1 5.5 3.23858 5.5 6C5.5 8.76142 7.73858 11 10.5 11Z"
                stroke="#454545"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="text">{isAuth ? username ? username : email : "Профиль"}</div>
        </Link>
      </styled.Actions>
    </styled.Header>
  );
};

export default Header;
