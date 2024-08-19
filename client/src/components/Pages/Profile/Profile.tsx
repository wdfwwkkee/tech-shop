import Header from "../../UI/Header/Header";
import Divider from "../../UI/Divider/Divider";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { changeName, logout } from "../../../slices/user.slice";
import { useAuth } from "../../../hooks/useAuth";
import * as styled from "./style.style";
import { useState } from "react";
import axios from "axios";
import { notify } from "../../../utils/notify";
import { Link } from "react-router-dom";

const Profile = () => {
  const dispatch = useAppDispatch();
  const [isEditUsername, setIsEditUsername] = useState<boolean>(false);
  const { username, id } = useAuth();
  const [customName, setCustomName] = useState<string>(username);

  function handleEdit() {
    setIsEditUsername((prev) => !prev);
  }

  async function changeUserName(id: number, customName: string) {
    try {
      if (username !== customName) {
        await axios.patch(`http://localhost:3002/api/user/${+id}`, {
          username: customName,
        });
        setIsEditUsername(false);
        notify("✔ Your username has changed successfully");
        dispatch(changeName(customName));
      }
      else {
        notify("✔ Your username doesn't have to be the same as the previous");
        setIsEditUsername(false)
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Header />
      <Divider />
      <styled.Profile>
        <div className="username">
          <div>Username:</div>
          {isEditUsername ? (
            <>
              <input
                type="text"
                value={customName}
                onChange={(e) => setCustomName(e.target.value)}
              />
              <button onClick={() => changeUserName(id, customName)}>
                save
              </button>
            </>
          ) : username ? (
            <input disabled type="text" value={username} />
          ) : (
            "You don't have username"
          )}

          <div className="icon">
            {!isEditUsername && (
              <button onClick={() => handleEdit()}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
                </svg>
              </button>
            )}
          </div>
        </div>
        <div className="change-password">
          <Link to={'/profile/change-password'}>Change password</Link>
        </div>
        <button className="logout" onClick={() => dispatch(logout())}>LogOut</button>
      </styled.Profile>
    </>
  );
};

export default Profile;
