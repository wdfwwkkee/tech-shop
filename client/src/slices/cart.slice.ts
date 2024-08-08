import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item } from "../types/DataItem";

function loadFromLocalStorage() {
  const storedCart = localStorage.getItem("cart");
  return storedCart ? JSON.parse(storedCart) : [];
}

function saveLocalStorage(state: Item[]) {
  return localStorage.setItem("cart", JSON.stringify(state));
}

export const CartSlice = createSlice({
  name: "cart",
  initialState: loadFromLocalStorage(),
  reducers: {
    addToCart(state: Item[], payload: PayloadAction<Item>) {
      const newItem = { ...payload.payload, count: 1 };
      state.push(newItem);
      saveLocalStorage(state);
    },
    deleteAll(state: Item[]) {
      state.length = 0;
      saveLocalStorage(state);
    },
    deleteById(state, payload: PayloadAction<number>) {
      const index = state.findIndex(
        (item: Item) => item.id === +payload.payload
      );
      if (index !== -1) {
        state.splice(index, 1);
        saveLocalStorage(state);
      }
    },
    incrementCounter(state: Item[], payload: PayloadAction<Item>) {
      const existItemIndex = state.findIndex(
        (item) => item.id === payload.payload.id
      );
      const updatedItem = {
        ...state[existItemIndex],
        count: state[existItemIndex].count + 1,
      };
      state[existItemIndex] = updatedItem;
      saveLocalStorage(state);
    },
    decrementCounter(state: Item[], payload: PayloadAction<Item>) {
      const existItemIndex = state.findIndex(
        (item) => item.id === payload.payload.id
      );
      const updatedItem = {
        ...state[existItemIndex],
        count: state[existItemIndex].count - 1,
      };
      state[existItemIndex] = updatedItem;
      saveLocalStorage(state);
    },
  },
});

export const { addToCart, deleteAll, deleteById, decrementCounter, incrementCounter } = CartSlice.actions;

export const CartReducer = CartSlice.reducer;
