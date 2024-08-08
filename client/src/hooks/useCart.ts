import { useAppSelector } from "./useAppSelector";

export function useCart() {
    return useAppSelector((state) => state.cart);
}