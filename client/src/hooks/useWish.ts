import { useAppSelector } from "./useAppSelector";

export function useWish() {
    return useAppSelector((state) => state.wish);
}