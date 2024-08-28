import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../types/User";

function loadFromLocalStorage() {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : { email: "", token: "", id: null, avatar : null };
}

function saveLocalStorage(state: IUser) {
  return localStorage.setItem("user", JSON.stringify(state));
}

export const UserSlice = createSlice({
  name: "user",
  initialState: loadFromLocalStorage(),
  reducers: {
    login(state: IUser, action: PayloadAction<IUser>) {
      const newState = action.payload;
      saveLocalStorage(newState);
      return newState;
    },
    logout() {
      const newState = { email: "", token: "", id: null };
      saveLocalStorage(newState);
      return newState;
    },
    changeName(state: IUser, action: PayloadAction<string>) {
      const newState = { ...state, username: action.payload };
      saveLocalStorage(newState);
      return newState;
    },
    uploadAvatar(state: IUser, action: PayloadAction<string>) {
      const newState = { ...state, avatar: action.payload };
      saveLocalStorage(newState);
      return newState;
    },
  },
});

export const { login, logout, changeName,uploadAvatar } = UserSlice.actions;

export const UserReducer = UserSlice.reducer;
