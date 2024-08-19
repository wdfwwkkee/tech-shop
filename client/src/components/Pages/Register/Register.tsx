import { useState } from "react";
import Header from "../../UI/Header/Header";
import Divider from "../../UI/Divider/Divider";
import axios from "axios";
import * as styled from "./style.style";
import { useNavigate } from "react-router-dom";
import { notify } from "../../../utils/notify";
import { useForm } from "react-hook-form";
import Loading from "../../UI/Loading/Loading";

type FormData = {
  email: string;
  password: string;
  confPassword: string;
};

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  
  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    try {
      if (data.password !== data.confPassword) {
        alert("Passwords do not match");
        setIsLoading(false);
        return;
      }
      await axios.post("http://localhost:3002/api/user", {
        email: data.email,
        password: data.password,
      });
      notify("✔ account successfully created");
      navigate("/login");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header />
      <Divider />
      <styled.Register $isLoading={isLoading}>
        <div className="title">Register</div>
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
              {errors.email && <span className="input-error">{errors.email.message}</span>}
            </div>
            <div className="input-container">
              <div className="title">Password</div>
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long",
                  },
                })}
                type="password"
                placeholder="Password"
                style={{
                  borderColor: errors.email ? "red" : "",
                  outlineColor: errors.email ? "red" : "",
                }}
              />
              {errors.password && <span className="input-error">{errors.password.message}</span>}
            </div>
            <div className="input-container">
              <div className="title">Confirm Password</div>
              <input
                {...register("confPassword", {
                  required: "Please confirm your password",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long",
                  },
                })}
                style={{
                  borderColor: errors.email ? "red" : "",
                  outlineColor: errors.email ? "red" : "",
                }}
                type="password"
                placeholder="Confirm Password"
              />
              {errors.confPassword && (
                <span className="input-error">{errors.confPassword.message}</span>
              )}
            </div>
          </div>
          <div className="submit-btn">
            <button type="submit">Register</button>
          </div>
        </form>
        {isLoading && (
          <div className="Loader">
            <Loading />
          </div>
        )}
      </styled.Register>
    </>
  );
};

export default Register;
