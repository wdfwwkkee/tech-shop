import React from "react";
import { useAuth } from "../hooks/useAuth";
import Authorized from "../components/UI/AuthorizedMessage/Authorized";

interface AuthComponentProps {
  children: JSX.Element;
}

const AuthComponent: React.FC<AuthComponentProps> = ({ children }) => {
  const { isAuth } = useAuth();

  return (
    <>{isAuth ? children : <Authorized />}</>
  );
};

export default AuthComponent;
