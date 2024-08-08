import { Dispatch, ThunkDispatch, UnknownAction } from "@reduxjs/toolkit";
import { addToWish, deleteFromWishById } from "../slices/wish.slice";
import { Item } from "../types/DataItem";
import { notify } from "./notify";
export function addWishItem(
  item: Item,
  existItemInWish: boolean,
  dispatch: ThunkDispatch<
    {
      cart: Item[];
      wish: Item[];
    },
    undefined,
    UnknownAction
  > &
    Dispatch<UnknownAction>
) {
  if (existItemInWish) {
    dispatch(deleteFromWishById(item.id));
    notify("✔ Item delete from favorite");
  } else {
    dispatch(addToWish(item));
    notify("✔ Item added to favorite");
  }
}
