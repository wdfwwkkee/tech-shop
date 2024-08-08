import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item } from "../types/DataItem";

function loadFromLocalStorage() {
  const storedCart = localStorage.getItem("wish");
  return storedCart ? JSON.parse(storedCart) : [];
}

function saveLocalStorage(state: Item[]) {
  return localStorage.setItem("wish", JSON.stringify(state));
}

export const WishSlice = createSlice({
  name: "wish",
  initialState: loadFromLocalStorage(),
  reducers: {
    addToWish(state: Item[], payload: PayloadAction<Item>) {
      state.push(payload.payload);
      saveLocalStorage(state);
    },
    deleteFromWishById(state, payload: PayloadAction<number>) {
      const index = state.findIndex(
        (item: Item) => item.id === +payload.payload
      );
      if (index !== -1) {
        state.splice(index, 1);
        saveLocalStorage(state);
      }
    },
  },
});

export const { addToWish, deleteFromWishById } = WishSlice.actions;

export const WishReducer = WishSlice.reducer;
