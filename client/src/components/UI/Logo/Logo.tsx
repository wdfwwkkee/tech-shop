import { Link } from "react-router-dom";
import * as styled from "./logo.style";

const Logo = () => {
  return (
    <Link to={'/'}>
      <styled.Logo>glance</styled.Logo>
    </Link>
  );
};

export default Logo;
