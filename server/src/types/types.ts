import { Cart } from "src/cart/entities/cart.entity";

export interface IUser {
    id : string,
    email : string,
    username? : string | null,
    avatar? : string | null,
    cart : Cart[],
}