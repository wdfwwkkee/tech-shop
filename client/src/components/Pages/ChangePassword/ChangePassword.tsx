import Header from "../../UI/Header/Header";
import Divider from "../../UI/Divider/Divider";
import * as styled from "./style.style";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios, { AxiosError } from "axios";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { notify } from "../../../utils/notify";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../slices/user.slice";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import Loading from "../../UI/Loading/Loading";

type Inputs = {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
};

const ChangePassword = () => {
  const initialState = {
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  };
  const [data, setData] = useState<Inputs>(initialState);
  const [error, setError] = useState<string>("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const dispatch = useAppDispatch();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const user = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  const changePassword = async() => {
    setIsLoading(true)
    if (data.newPassword.length < 6 || data.confirmNewPassword.length < 6)
      return;
    if (data.newPassword !== data.confirmNewPassword) return setError("Passwords is not match");
    try {
      await axios.patch(
        "http://localhost:3002/api/user/change-password",
        {
          id: user.id,
          currentPassword: data.currentPassword,
          newPassword: data.confirmNewPassword,
        },
        { headers: { Authorization: `Bearer ${user.token}` } }
      );
      setIsLoading(false)
      notify("✔ You have successfully changed the password");
      dispatch(logout());
      navigate("/login");
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
      setIsLoading(false)
    }
  }

  return (
    <>
      <Header />
      <Divider />
      <styled.ChangePassword>
        <div className="title">Change Password</div>
        <form onSubmit={handleSubmit(changePassword)}>
          <div className="inputs">
            <div className="input-container">
              <div className="title">Current password:</div>
              <input
                {...register("currentPassword", {
                  required: "Current password is required",
                })}
                value={data.currentPassword}
                onChange={(e) =>
                  setData({ ...data, currentPassword: e.target.value })
                }
                type="password"
                placeholder="Current password"
              />
              {errors.currentPassword && (
                <span className="input-error">
                  {errors.currentPassword.message}
                </span>
              )}
            </div>
            <div className="input-container">
              <div className="title">New password:</div>
              <input
                {...register("newPassword", {
                  required: "New password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long",
                  },
                })}
                value={data.newPassword}
                onChange={(e) =>
                  setData({ ...data, newPassword: e.target.value })
                }
                type="password"
                placeholder="New password"
              />
              {errors.newPassword && (
                <span className="input-error">
                  {errors.newPassword.message}
                </span>
              )}
            </div>
            <div className="input-container">
              <div className="title">Confirm new password:</div>
              <input
                {...register("confirmNewPassword", {
                  required: "Confirm password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long",
                  },
                })}
                value={data.confirmNewPassword}
                onChange={(e) =>
                  setData({ ...data, confirmNewPassword: e.target.value })
                }
                type="password"
                placeholder="Confirm new password"
              />
              {errors.confirmNewPassword && (
                <span className="input-error">
                  {errors.confirmNewPassword.message}
                </span>
              )}
            </div>
          </div>
          {error && (
            <div style={{ color: "red", marginBottom: 30, fontWeight: 600 }}>
              {error}
            </div>
          )}
          <button type="submit" className="submit-btn">
            Change password
          </button>
        </form>
        
        {isLoading && <div className="loading"><Loading /></div>}
      </styled.ChangePassword>
    </>
  );
};

export default ChangePassword;
