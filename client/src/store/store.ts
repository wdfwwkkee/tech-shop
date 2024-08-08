import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { CartReducer } from "../slices/cart.slice";
import { WishReducer } from "../slices/wish.slice";



const reducers = combineReducers({
    cart : CartReducer,
    wish : WishReducer,
})

export const store = configureStore({
    reducer : reducers
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

