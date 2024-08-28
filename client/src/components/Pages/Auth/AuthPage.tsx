import { useState } from "react";
import Header from "../../UI/Header/Header";
import Divider from "../../UI/Divider/Divider";
import { Link, useNavigate } from "react-router-dom";
import axios, { AxiosError } from "axios";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { login } from "../../../slices/user.slice";
import * as styled from "./style.style";
import Loading from "../../UI/Loading/Loading";
import { useForm } from "react-hook-form";
import { notify } from "../../../utils/notify";

type FormData = {
  email: string;
  password: string;
};

const AuthPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    try {
      const responce = await axios.post(
        "http://localhost:3002/api/auth/login",
        {
          email: data.email,
          password: data.password,
        }
      );
      console.log(responce)
      dispatch(
        login({
          token: responce.data.token,
          email: responce.data.email,
          id: responce.data.id,
          username : responce.data.username,
          avatar : responce.data.avatar,
        })
      );
      notify("✔ successfully");
      setIsLoading(false);
      navigate("/");
    } catch (error) {
      let message;
      if (
        error instanceof AxiosError &&
        error.response &&
        error.response.data
      ) {
        message = error.response.data.message || error.message;
      } else if (error instanceof Error) {
        message = error.message;
      } else if (typeof error === "string") {
        message = error;
      } else {
        message = "An unknown error occurred";
      }
      reportError({ message });
      setIsLoading(false);
      notify(`❌ ${message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header />
      <Divider />
      <styled.Login isLoading={isLoading}>
        <div className="title">Login</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="inputs">
            <div className="input-container">
              <div className="title">Email</div>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email address",
                  },
                })}
                style={{
                  borderColor: errors.email ? "red" : "",
                  outlineColor: errors.email ? "red" : "",
                }}
                placeholder="Email"
              />
              {errors.email && (
                <span className="input-error">{errors.email.message}</span>
              )}
            </div>
            <div className="input-container">
              <div className="title">Password</div>
              <input
                {...register("password", {
                  required: "Password is required",
                })}
                type="password"
                placeholder="Password"
                style={{
                  borderColor: errors.email ? "red" : "",
                  outlineColor: errors.email ? "red" : "",
                }}
              />
              {errors.password && (
                <span className="input-error">{errors.password.message}</span>
              )}
            </div>
          </div>
          <div className="submit-btn">
            <button type="submit">Login</button>
          </div>
          <div className="not-account">
            <div>Don't have account?</div>
            <Link to={"/register"}>Register</Link>
          </div>
        </form>
        {isLoading && (
          <div className="Loader">
            <Loading />
          </div>
        )}
      </styled.Login>
    </>
  );
};

export default AuthPage;
