import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { CartReducer } from "../slices/cart.slice";
import { WishReducer } from "../slices/wish.slice";
import { UserReducer } from "../slices/user.slice";



const reducers = combineReducers({
    cart : CartReducer,
    wish : WishReducer,
    user : UserReducer,
})

export const store = configureStore({
    reducer : reducers
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

